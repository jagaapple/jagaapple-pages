import "ress";
import "public/colors.css";
import "public/screens.css";
import "public/application.css";

import { Noto_Sans_JP } from "next/font/google";

import { clsx } from "packages/react";
import { Metadata } from "packages/next";
import { appName, appCopyright, appTwitterId } from "packages/settings";

import { mixinStyles } from "./shared";
import styles from "./layout.module.css";

const noto = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title: appName,
  description: `${appTwitterId} による雑記です。明日消えているかもしれません。`,
  applicationName: appName,
  twitter: {
    site: appTwitterId,
    creator: appTwitterId,
  },
} satisfies Metadata;

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
            <a className={mixinStyles.textLink} href="https://twitter.com/jagaapple" target="_blank">
              {appTwitterId}
            </a>
            .
          </div>
        </footer>
      </body>
    </html>
  );
}
