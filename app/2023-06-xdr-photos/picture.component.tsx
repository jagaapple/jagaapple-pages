"use client";

import { clsx, React, StandardProps } from "packages/react";

import styles from "./picture.module.css";

type Props = React.PropsWithChildren<
  Readonly<{
    /** A caption. */
    caption: string;
    /** A position of the caption. */
    captionPosition: "LEADING_TOP" | "TRAILING_TOP" | "TRAILING_BOTTOM" | "LEADING_BOTTOM";
  }>
> &
  Pick<StandardProps, "wrapperClassName">;

export function Picture(props: Props) {
  const [isHDRVisible, setIsHDRVisible] = React.useState(false);

  const switchImage = React.useCallback(() => setIsHDRVisible((prevState) => !prevState), []);

  if (React.Children.count(props.children) !== 2) throw new Error("Picture must contain two images");

  return (
    <figure className={clsx(styles.wrapper, { [styles.hdrVisible]: isHDRVisible }, props.wrapperClassName)}>
      {props.children}

      <figcaption
        className={clsx(styles.caption)}
        style={{
          top: props.captionPosition.endsWith("TOP") ? 0 : "auto",
          right: props.captionPosition.startsWith("TRAILING") ? 0 : "auto",
          bottom: props.captionPosition.endsWith("BOTTOM") ? 0 : "auto",
          left: props.captionPosition.startsWith("LEADING") ? 0 : "auto",
        }}
      >
        {props.caption}
      </figcaption>

      <div className={styles.currentMode}>
        {isHDRVisible ? "HDR" : "SDR"}
        <small>
          4K&nbsp;
          {isHDRVisible ? "Display P3" : "sRGB"}
        </small>
      </div>
      <button type="button" className={styles.switch} onClick={switchImage}>
        {isHDRVisible ? "SDR" : "HDR"}
        に切り替える
      </button>
    </figure>
  );
}
