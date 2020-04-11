import React from "react";

import DocumentEditor from "../DocumentEditor";

import './index.css';

export default {
  component: DocumentEditor,
  title: "DocumentEditor",
};

export const Preview = () => <DocumentEditor />;

export const Themed = () => <DocumentEditor className="Themed" />