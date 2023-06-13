/* eslint-disable @next/next/no-img-element */
import { Image, Metadata } from "packages/next";
import { getFullPageTitle } from "packages/settings";

import { Picture } from "./picture.component";
import eyecatch from "./opengraph-image.jpg";
import styles from "./page.module.css";

const title = "今更だけど、XDR 対応の Apple 製品で見る HDR 写真が綺麗すぎて笑っちゃう";

export const metadata = {
  title: getFullPageTitle(title),
} satisfies Metadata;

export default function Page() {
  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <time className={styles.createdAt}>2023/06/03</time>
        <Image src={eyecatch} alt="" priority />
        <h2 className={styles.heading}>{title}</h2>
      </header>

      <p>
        Apple による造語<b>“XDR（Xtreme Dynamic Range）”</b>に対応した Apple 製品が増えてきました。 XDR を極めて雑に説明すると、
        HDR（High Dynamic
        Range：ダイナミックレンジを高めたもの）コンテンツ内の明るい部分を、えげつないほど明るくディスプレイに表示する技術です。
      </p>
      <p>
        僕は2年くらい前に、『Pro Display XDR』という非常に高価な Apple
        の純正ディスプレイを購入し、今では仕事もプライベートも非常にお世話になっている Apple 製品を持っています。 その名の通り
        XDR に対応しているため、当初は『Apple TV+』等で HDR 対応の映像を楽しんでいましたが、映像に限らず HDR
        に対応したコンテンツはまだまだ少ない印象。 今となっては一般人が<s>意図しているんだかしていないんだか</s> iPhone
        で撮影された HDR 動画が YouTube に上がっており、そのまま HDR コンテンツとして視聴することはできますが、いわゆる“作品”が
        HDR に対応していくにはまだ時間がかかりそうです。
      </p>
      <p>
        そこでふと、
        <b>趣味で撮影していた写真を HDR 出力して見てみると、これがあまりにも美しくてニヤけてしまいました</b>。
        <br />
        「今さら HDR とか、何遅れたこと言ってんの？」と思う人もいるかもしれませんが、意外に皆さん{" "}
        <b>HDR 動画を見たことはあっても、 HDR 写真を見たことはないんじゃないか</b>と思うのです。
      </p>
      <p>
        今回は、僕が過去に撮影した写真を使って HDR 写真の魅力の片鱗を皆さんに楽しんでもらおうと思います。
        なおこの記事に掲載している写真は（実質）<b> XDR に対応した Mac 上での Google Chrome のみ対応</b>
        しているため、ご注意ください。それ以外の環境では HDR
        写真がまったく表示されないか、微妙に変な色で表示される可能性があります。
      </p>
      <p>執筆時現在、 XDR に対応している Mac （とその Apple 純正周辺機器）は以下の通りです。</p>
      <ul>
        <li>Pro Display XDR</li>
        <li>Apple シリコンを搭載した MacBook Pro 14インチ（2021〜）</li>
        <li>Apple シリコンを搭載した MacBook Pro 16インチ（2021〜）</li>
      </ul>
      <p>
        また、<strong>ぜひ大画面で、できる限り大画面で</strong>楽しんでいただければと思います！
      </p>

      <Picture
        wrapperClassName={styles.picture}
        caption="Sony α7 IV / FE 35mm F1.4 GM / ISO 100, F5.6, 1/125"
        captionPosition="LEADING_BOTTOM"
      >
        <img src="/assets/2023-06-xdr-photos/photo-01-sdr.jpg" alt="" />
        <img src="/assets/2023-06-xdr-photos/photo-01-hdr.avif" alt="" />
      </Picture>

      <p>
        <strong>どうですか、これ！？立体感えげつなくないですか！？</strong>
      </p>
      <p>
        この写真は先日40周年を迎えた、ディズニーランドに遊びに行った際に撮影したアトラクション『美女と野獣“魔法のものがたり”』なんですが、
        光が当たる部分——空が SDR に比べて明るく表示されています。
      </p>
      <p>雲の部分を凝視していると、わずかに動いているんじゃないかと思うほどの立体感……！</p>
      <p>
        既存の写真、いわゆる SDR
        写真も、現像（写真編集）時に“かすみの除去”等の編集を施すことで雲の立体感を強調させることはできるものの、不自然さが残ってしまいますし、やはり
        HDR の立体感には到底及びません。
      </p>

      <Picture
        wrapperClassName={styles.picture}
        caption="Sony α7 III / FE 85mm F1.8 / ISO 100, F2.8, 1/320"
        captionPosition="LEADING_TOP"
      >
        <img src="/assets/2023-06-xdr-photos/photo-02-sdr.jpg" alt="" />
        <img src="/assets/2023-06-xdr-photos/photo-02-hdr.avif" alt="" />
      </Picture>

      <p>
        HDR 写真の恐ろしい点は「 HDR になれると SDR がくすんで見える」ところにあります。
        <br />
        上の写真のような、なんの変哲もないスナップの HDR
        版を見ても「まあ綺麗だけど……」程度の感想を抱く人も多々いるでしょう。ただそれを見たあとに SDR
        を見ると、あら不思議。一気に写真が灰色になったかのように錯覚します。
      </p>
      <p>
        「新世代のモノを見てもそこまで感動しないけど、以前のモノを見ると凄さを実感する」という点では、 60Hz から 120Hz
        のリフレッシュレートを持つディスプレイに移行した感覚を思い出しました。
      </p>

      <Picture
        wrapperClassName={styles.picture}
        caption="Sony α7 III / FE 20mm F1.8 G / ISO 800, F1.8, 1/15"
        captionPosition="LEADING_TOP"
      >
        <img src="/assets/2023-06-xdr-photos/photo-03-sdr.jpg" alt="" />
        <img src="/assets/2023-06-xdr-photos/photo-03-hdr.avif" alt="" />
      </Picture>

      <p>HDR と人工物の相性は抜群で、このダイナミックレンジの広さが、より画をシャープに仕上げてくれます。</p>

      <Picture
        wrapperClassName={styles.picture}
        caption="Sony α7 III / FE 20mm F1.8 G / ISO 400, F1.8, 1/50"
        captionPosition="LEADING_BOTTOM"
      >
        <img src="/assets/2023-06-xdr-photos/photo-04-sdr.jpg" alt="" />
        <img src="/assets/2023-06-xdr-photos/photo-04-hdr.avif" alt="" />
      </Picture>

      <p>風景以外にも、こうした幾何学的な被写体も HDR と相性最高です。</p>

      <Picture
        wrapperClassName={styles.picture}
        caption="Sony α7 III / FE 35mm F1.4 GM / ISO 800, F5.6, 1/60"
        captionPosition="TRAILING_TOP"
      >
        <img src="/assets/2023-06-xdr-photos/photo-05-sdr.jpg" alt="" />
        <img src="/assets/2023-06-xdr-photos/photo-05-hdr.avif" alt="" />
      </Picture>

      <p>
        <strong>見てください、このイカのダイナミックレンジを。</strong>
        「白って200色あるんやな〜」と実感させてくれます。
      </p>
      <p>こうした何気ない日常のどこを切り取っても、ニヤニヤして振り返ることができちゃいます。</p>

      <Picture
        wrapperClassName={styles.picture}
        caption="Sony α7 III / FE 35mm F1.4 GM / ISO 500, F1.4, 1/10"
        captionPosition="TRAILING_BOTTOM"
      >
        <img src="/assets/2023-06-xdr-photos/photo-06-sdr.jpg" alt="" />
        <img src="/assets/2023-06-xdr-photos/photo-06-hdr.avif" alt="" />
      </Picture>

      <p>HDR が最も映えるのは、やはり夜景でしょう。</p>
      <p>
        日差しピカピカな日中の写真は、全体が非常に明るく表示されてしまうため、眩しすぎて「 SDR
        の方が目が疲れなくて良い」と思う人も少なくありません。 自分も夜間に YouTube でギラギラした HDR
        動画が再生されると「うわああ、やめてくれええ」となります。
        <br />
        しかし多くの夜景シーンでは、コンテンツ全体が黒基調に近くなり、小さい領域が XDR によって強調されるため、良い塩梅で HDR
        コンテンツを楽しむことができると思います。
      </p>
      <p>
        写真界隈では、しばしば写真観賞用メディアとして「紙かデジタルか」論争が起こりがちで、冷静な人はみな「どちらにも良いところがある」と結論付けます。自分もその立場ではあります。
        <br />
        ただ、この<b>HDR 写真と XDR の組み合わせは、紙では到底成し得ないデジタルならではの非常に大きなメリット</b>
        です。今回は掲載していませんが、人物撮影時の逆光で夕陽が肌にあたった表現なんかは、まさに息を呑む美しさ。
      </p>

      <p>
        今回掲載した写真は、過去に『Adobe Lightroom』で現像した写真をそのまま HDR 出力したものなので、本来ならば HDR
        用に細かく明るさ等調整するべきなのでしょう。
        <br />
        しかしそのまま HDR 出力したものでも、ここまで“過去の作品”を魅せてくれるわけですから、ぜひ XDR に対応した Apple
        製品を持っている＆写真を趣味でやっている方は、ご自身の「これいいなあ」と思う写真を HDR 出力してみてください！
        ニヤニヤが止まらないこと、間違いなしですよ！
      </p>

      <p>それでは、また！</p>
    </article>
  );
}
