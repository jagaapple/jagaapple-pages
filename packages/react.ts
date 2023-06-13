export { default as React } from "react";
export { default as ReactDOM } from "react-dom";
export { default as clsx } from "clsx";

export type StandardProps = Readonly<{
  /** A CSS class name to apply the top level element in component. */
  wrapperClassName?: string;
  /** A style to apply the top level element in component. */
  wrapperStyle?: React.CSSProperties;
}>;
