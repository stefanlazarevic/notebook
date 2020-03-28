import React from "react";

export default function ItemCounter(props: any) {
  return (
    <span>
      {props.length} {props.length === 1 ? "Item" : "Items"}
    </span>
  );
}
