import Link from "next/link";
import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
import { footerLinks } from "@/lib/data";
import { Logo } from "./logo";

const socials = [
  { label: "X", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#0b1b2a] text-white">
      <div className="section-shell py-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <Logo inverted />
            <p className="mt-4 max-w-xs text-[11px] leading-[1.95] text-white/50">
              英会話スクール・オンライン英会話・資格対策・語学留学を、編集部が実際に取材して比較。
              夢に挑戦する英語学習者をサポートするポータルサイトです。
            </p>

            <div className="mt-5 flex items-center gap-2">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="grid h-8 min-w-8 place-items-center rounded-full border border-white/15 px-2.5 text-[9px] font-bold text-white/60 transition-colors hover:border-white/35 hover:text-white"
                >
                  {social.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 space-y-2">
              <p className="flex items-center gap-1.5 text-[10px] text-white/45">
                <ShieldCheck className="size-3.5 text-accent-500" />
                編集部が取材・確認した情報を掲載しています
              </p>
              <p className="flex items-center gap-1.5 text-[10px] text-white/45">
                <Mail className="size-3.5 text-white/40" />
                info@english-school-info.com
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-7 sm:grid-cols-4">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h2 className="text-[10.5px] font-bold tracking-wide text-white">{column.title}</h2>
                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-start gap-1 text-[10.5px] leading-relaxed text-white/50 transition-colors hover:text-white"
                      >
                        {link.label}
                        <ArrowUpRight className="mt-0.5 size-2.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[9.5px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>&copy; 2026 英語学校しらべ All rights reserved.</p>
            <p className="mt-1 text-white/25">本サイトはリニューアル用のデザインモックです。掲載内容はサンプルです。</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy" className="transition-colors hover:text-white/70">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white/70">
              利用規約
            </Link>
            <Link href="/sitemap" className="transition-colors hover:text-white/70">
              サイトマップ
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white/70">
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
