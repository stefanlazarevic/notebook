import React, {
  forwardRef,
  useMemo,
  useRef,
  useImperativeHandle,
  useEffect,
  useCallback
} from "react";

import DetailsProps from "./DetailsProps";

const Details = forwardRef((props: DetailsProps, ref: any) => {
  const details = useRef<HTMLDivElement>(null);

  const style = useMemo(
    () => ({
      height: 0,
      transition: `height 300ms ease-in`,
      overflow: "hidden"
    }),
    []
  );

  const onCollapse = useMemo(() => {
    if (typeof props.onCollapse === "function") {
      return props.onCollapse;
    }
  }, [props.onCollapse]);

  const onTransitionEnd = useCallback(() => {
    if (details.current) {
      if (details.current.style.height === "0px") {
        if (typeof onCollapse === "function") {
          onCollapse();
        }
      }
    }
  }, [onCollapse]);

  useEffect(() => {
    const _details = details.current;

    if (props.open) {
      if (_details) {
        _details.style.height = _details.scrollHeight + "px";
      }
    }

    if (_details) {
      _details.addEventListener("transitionend", onTransitionEnd);
    }

    return () => {
      if (_details) {
        _details.removeEventListener("transitionend", onTransitionEnd);
      }
    };
  }, [props.open, onTransitionEnd]);

  useImperativeHandle(ref, () => ({
    expand: () => {
      if (details.current) {
        details.current.style.height = details.current.scrollHeight + "px";
      }
    },
    collapse: () => {
      if (details.current) {
        details.current.style.height = details.current.scrollHeight + "px";
      }

      setTimeout(() => {
        if (details.current) {
          details.current.style.height = "0px";
        }
      }, 0);
    }
  }));

  function renderChildren() {
    if (!props.open) {
      return null;
    }

    if (typeof props.children === "function") {
      return props.children(props.open);
    }

    return props.children;
  }

  return (
    <div
      ref={details}
      className={props.className ? `Details ${props.className}` : "Details"}
      style={style}
    >
      {renderChildren()}
    </div>
  );
});

Details.displayName = "CollapseDetails";

export default Details;
