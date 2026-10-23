import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
});

const zen = Zen_Kaku_Gothic_New({
  variable: "--font-zen",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://english-school-info.com"),
  title: {
    default: "英語学校しらべ｜夢を応援する英語学習ポータルサイト",
    template: "%s｜英語学校しらべ",
  },
  description:
    "英会話スクール・オンライン英会話・英語資格試験・語学留学を編集部が徹底比較。目的別ランキングと取材レポートで、あなたに合う英語学習が見つかります。",
  keywords: ["英会話", "英語学校", "オンライン英会話", "TOEIC", "TOEFL", "IELTS", "英検", "語学留学"],
  openGraph: {
    title: "英語学校しらべ｜夢を応援する英語学習ポータルサイト",
    description:
      "英会話スクール・オンライン英会話・英語資格試験・語学留学を編集部が徹底比較。目的別ランキングと取材レポートで、あなたに合う英語学習が見つかります。",
    type: "website",
    locale: "ja_JP",
    siteName: "英語学校しらべ",
  },
};

export const viewport: Viewport = {
  themeColor: "#12283c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" data-scroll-behavior="smooth" className={`${noto.variable} ${zen.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-canvas font-sans text-ink">{children}</body>
    </html>
  );
}
