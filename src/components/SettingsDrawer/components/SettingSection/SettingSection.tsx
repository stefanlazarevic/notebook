import React, { forwardRef } from "react";

import "./SettingSection.css";

export default function SettingSection(title: string) {
  return (SettingComponent: React.FunctionComponent) => {
    return forwardRef((props: any, ref: any) => {
      return (
        <section className="SettingSection">
          <h4 className="SettingSection__title">{title}</h4>
          <SettingComponent ref={ref} {...props} />
        </section>
      );
    });
  };
}
