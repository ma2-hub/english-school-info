"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AssetImage } from "./asset-image";
import { ArrowRight, ChevronDown, Menu, Minus, Plus, Search, Sparkles, X } from "lucide-react";
import { navigation } from "@/lib/data";
import { Logo } from "./logo";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink text-white">
        <div className="section-shell flex h-9 items-center justify-between text-[11px]">
          <p className="flex items-center gap-2 tracking-wide text-white/75">
            <Sparkles className="size-3.5 text-warm-400" />
            夢に挑戦する英語学習者をサポートする比較メディア
          </p>
          <div className="hidden items-center gap-5 text-white/70 sm:flex">
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-warm-100">
              2026年度版
            </span>
            <Link href="/about" className="transition-colors hover:text-white">
              編集部について
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              取材・掲載のご依頼
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`border-b border-line/80 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_30px_-24px_rgba(18,40,60,0.55)]" : ""
        }`}
      >
        <div className="section-shell flex h-[68px] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="メインナビゲーション">
            {navigation.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-bold text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {item.label}
                  {item.groups && (
                    <ChevronDown className="size-3.5 text-muted transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                  )}
                </Link>

                {item.groups && (
                  <div className="invisible absolute left-0 top-full z-10 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="flex gap-8 rounded-2xl border border-line bg-white p-6 shadow-[0_30px_70px_-30px_rgba(18,40,60,0.35)]">
                      <div className="flex gap-7">
                        {item.groups.map((group) => (
                          <div key={group.title} className="min-w-[190px]">
                            <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-500">
                              {group.title}
                            </p>
                            <ul className="space-y-0.5">
                              {group.links.map((link) => (
                                <li key={link.label}>
                                  <Link
                                    href={link.href}
                                    className="group/link flex items-center gap-1.5 whitespace-nowrap rounded-md px-2 py-1.5 text-[12.5px] text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
                                  >
                                    <span>{link.label}</span>
                                    {link.badge && (
                                      <span className="shrink-0 whitespace-nowrap rounded bg-warm-100 px-1 py-0.5 text-[9px] font-bold text-warm-600">
                                        {link.badge}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {item.featured && (
                        <Link
                          href={item.featured.href}
                          className="group/featured w-56 shrink-0 overflow-hidden rounded-xl bg-canvas"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden">
                            <AssetImage
                              src={item.featured.image}
                              alt=""
                              fill
                              sizes="224px"
                              className="object-cover transition-transform duration-500 group-hover/featured:scale-105"
                            />
                          </div>
                          <div className="p-3">
                            <p className="text-[10px] font-bold text-brand-600">{item.featured.label}</p>
                            <p className="mt-1 text-[12px] font-bold leading-snug text-ink">
                              {item.featured.title}
                            </p>
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="サイト内検索"
              aria-expanded={searchOpen}
              className="grid size-10 place-items-center rounded-full text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              <Search className="size-[18px]" />
            </button>
            <Link
              href="/school-ranking"
              className="hidden items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2.5 text-[12.5px] font-bold text-white shadow-[0_10px_24px_-14px_rgba(23,96,159,0.9)] transition-all hover:bg-brand-700 sm:flex"
            >
              スクールを探す
              <ArrowRight className="size-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="メニューを開く"
              className="grid size-10 place-items-center rounded-full text-ink xl:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-line bg-white">
            <form action="/search" className="section-shell flex items-center gap-3 py-3">
              <Search className="size-4 shrink-0 text-muted" />
              <input
                type="search"
                name="q"
                placeholder="英会話スクール、資格、留学先などで検索"
                className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-muted/80"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-brand-600 px-5 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-700"
              >
                検索する
              </button>
            </form>
          </div>
        )}
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden">
          <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-line px-5">
            <Logo />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="メニューを閉じる"
              className="grid size-10 place-items-center rounded-full bg-canvas text-ink"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
            <form action="/search" className="mb-5 flex items-center gap-2 rounded-xl bg-canvas px-3">
              <Search className="size-4 text-muted" />
              <input
                type="search"
                name="q"
                placeholder="サイト内を検索"
                className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted"
              />
            </form>

            <nav aria-label="モバイルナビゲーション" className="divide-y divide-line">
              {navigation.map((item, i) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex-1 py-4 text-[15px] font-bold text-ink"
                    >
                      {item.label}
                    </Link>
                    {item.groups && (
                      <button
                        type="button"
                        onClick={() => setOpenSection(openSection === i ? null : i)}
                        aria-label={`${item.label}のメニューを${openSection === i ? "閉じる" : "開く"}`}
                        aria-expanded={openSection === i}
                        className="grid size-9 place-items-center rounded-full text-ink-soft transition-colors hover:bg-canvas"
                      >
                        {openSection === i ? <Minus className="size-4" /> : <Plus className="size-4" />}
                      </button>
                    )}
                  </div>
                  {item.groups && openSection === i && (
                    <div className="space-y-4 pb-5">
                      {item.groups.map((group) => (
                        <div key={group.title}>
                          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-500">
                            {group.title}
                          </p>
                          <ul className="space-y-0.5">
                            {group.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="block rounded-lg px-2 py-2 text-[13px] text-ink-soft hover:bg-brand-50"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-6 space-y-2 pb-8">
              <Link
                href="/school-ranking"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3.5 text-sm font-bold text-white"
              >
                スクールを探す
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-line py-3.5 text-sm font-bold text-ink-soft"
              >
                取材・掲載のご依頼
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
