import "ress";
import "public/colors.css";
import "public/screens.css";
import "public/application.css";

import { Noto_Sans_JP } from "next/font/google";

import { clsx } from "packages/react";
import { appName, appCopyright } from "packages/settings";

import { mixinStyles } from "./shared";
import styles from "./layout.module.css";

const noto = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title: appName,
  description: "@jagaapple による雑記です。明日消えているかもしれません。",
};

export default function RootLayout(props: React.PropsWithChildren<unknown>) {
  return (
    <html lang="ja">
      <body className={clsx(noto.className, styles.body)}>
        <header className={styles.header}>
          <h1 className={styles.logo}>{metadata.title}</h1>
          <p className={styles.description}>{metadata.description}</p>
        </header>
        <main>{props.children}</main>

        <footer className={styles.footer}>
          <span>{appCopyright}</span>
          <div>
            Created by{" "}
            <a className={mixinStyles.textLink} href="https://tawitter.com/jagaapple" target="_blank">
              @jagaapple
            </a>
            .
          </div>
        </footer>
      </body>
    </html>
  );
}
