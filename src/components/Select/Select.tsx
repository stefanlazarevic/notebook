import React, { useState, useEffect, useCallback } from "react";

import "./Select.css";

import SelectProps from "./SelectProps";
import Option from "./components/Option";

export default function Select(props: SelectProps) {
  const [expanded, setExpanded] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(
    props.options.findIndex((option) => option.selected)
  );

  const outsideClickCallback = useCallback(() => {
    console.log("Clicked outside");
    if (expanded) {
      setExpanded(false);
    }
  }, [expanded]);

  useEffect(
    function componentDidMount() {
      if (expanded) {
        window.addEventListener("click", outsideClickCallback);
      }

      return function componentWillUnmount() {
        if (window) {
          window.removeEventListener("click", outsideClickCallback);
        }
      };
    },
    [expanded, outsideClickCallback]
  );

  function onKeyDown(event: React.KeyboardEvent) {
    const { keyCode } = event;

    if (keyCode === 32 || keyCode === 40) {
      open();
    }

    if (keyCode === 27) {
      close();
    }
  }

  function onClick(event: React.MouseEvent) {
    event.stopPropagation();

    if (!expanded) {
      open();
    }
  }

  function open() {
    setExpanded(true);
    setSelectedIndex(selectedIndex > -1 ? selectedIndex : 0);

    if (window) {
      window.addEventListener("click", outsideClickCallback);
    }
  }

  function close() {
    if (expanded) {
      setExpanded(false);
    }

    window.removeEventListener("click", outsideClickCallback);
  }

  function onSelected(event: React.SyntheticEvent, index: number) {
    setSelectedIndex(index);
    close();
  }

  return (
    <div
      className="Select"
      role="listbox"
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-disabled={props.disabled}
      aria-expanded={expanded}
      aria-multiselectable={false}
      aria-required={props.required}
      aria-readonly={props["aria-readonly"]}
      aria-label={props["aria-label"]}
      aria-labelledby={props["aria-labelledby"]}
      aria-roledescription={props["aria-roledescription"]}
      onClick={onClick}
    >
      <span>
        {props.options[selectedIndex]
          ? props.options[selectedIndex].label
          : props.placeholder}
      </span>
      <div className="SelectList" role="list">
        {props.options.map((child, index) => {
          return (
            <Option
              key={child.id}
              index={index}
              value={child.value}
              selectedIndex={selectedIndex}
              onSelected={onSelected}
              expanded={expanded}
              label={child.label}
            />
          );
        })}
      </div>
    </div>
  );
}
