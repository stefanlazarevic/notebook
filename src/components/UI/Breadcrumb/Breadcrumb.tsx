import React, { useRef, useEffect, useCallback } from "react";

import "./Breadcrumb.css";

export default function Breadcrumb(props: any) {
  const breadcrumb = useRef<HTMLDivElement>(null);
  const breadcrumbElements = useRef<HTMLCollectionOf<HTMLDivElement>>(null);
  const firstVisibleIndex = useRef<number>(0);
  const hiddenWidth = useRef<number[]>([]);

  const resize = useCallback(() => {
    if (elementOverflow()) {
      while (elementOverflow()) {
        if (breadcrumbElements.current) {
          if (firstVisibleIndex.current > breadcrumbElements.current.length) {
            return;
          }

          const element = breadcrumbElements.current[firstVisibleIndex.current];

          if (hiddenWidth.current) {
            hiddenWidth.current.push(
              element.offsetWidth + getMarginRight(getComputedStyle(element))
            );
          }

          hideElement(firstVisibleIndex.current++);
        }
      }
    } else {
      if (hiddenWidth.current && breadcrumb.current) {
        if (hiddenWidth.current.length > 0) {
          if (breadcrumbElements.current) {
            const visibleWidth = Array.from(breadcrumbElements.current)
              .slice(hiddenWidth.current.length)
              .reduce((width, element) => {
                return (
                  width +
                  element.offsetWidth +
                  getMarginRight(getComputedStyle(element))
                );
              }, 0);

            while (
              visibleWidth +
                hiddenWidth.current[hiddenWidth.current.length - 1] <
              breadcrumb.current.clientWidth
            ) {
              hiddenWidth.current.pop();
              showElement(--firstVisibleIndex.current);
            }
          }
        }
      }
    }
  }, []);

  function elementOverflow() {
    if (!breadcrumb.current) {
      return false;
    }

    return breadcrumb.current.scrollWidth > breadcrumb.current.clientWidth;
  }

  function getComputedStyle(
    element: HTMLDivElement
  ): CSSStyleDeclaration | undefined {
    if (window) {
      return window.getComputedStyle(element);
    }

    return undefined;
  }

  function getMarginRight(style?: CSSStyleDeclaration): number {
    if (!style || !style.marginRight) {
      return 0;
    }

    return parseFloat(style.marginRight);
  }

  function showElement(index: number) {
    if (breadcrumbElements.current) {
      if (breadcrumbElements.current[index]) {
        breadcrumbElements.current[index].classList.remove("hidden");
      }
    }
  }

  function hideElement(index: number) {
    if (breadcrumbElements.current) {
      if (breadcrumbElements.current[index]) {
        breadcrumbElements.current[index].classList.add("hidden");
      }
    }
  }

  useEffect(() => {
    if (breadcrumb && breadcrumb.current) {
      // @ts-ignore
      breadcrumbElements.current = breadcrumb.current.getElementsByClassName(
        "BreadcrumbElement"
      )!;
    }

    if (window) {
      window.addEventListener("resize", resize);
      resize();
    }

    return function componentWillUnmount() {
      if (window) {
        window.removeEventListener("resize", resize);
      }
    };
  }, [resize]);

  return (
    <div ref={breadcrumb} className="Breadcrumb">
      {props.children}
    </div>
  );
}
