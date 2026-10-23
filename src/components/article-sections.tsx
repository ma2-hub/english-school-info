import Link from "next/link";
import { AssetImage } from "./asset-image";
import { ArrowRight, ArrowUpRight, Clock3, Mail, MessageCircleQuestion } from "lucide-react";
import { featureArticles, newArticles, popularArticles } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function FeatureSection() {
  const [lead, ...rest] = featureArticles;

  return (
    <section id="features" className="border-b border-line/70 bg-white py-14 lg:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Editor's Picks"
          title="編集部イチオシ特集"
          description="料金の裏側、試験の活用法、明日から使えるフレーズまで。読むだけで判断できる記事を集めました。"
          action={{ label: "特集記事をもっと見る", href: "/features" }}
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-12">
          <article className="group lg:col-span-7">
            <Link href={lead.href} className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-card">
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-50">
                <AssetImage
                  src={lead.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-brand-700 shadow-sm backdrop-blur">
                  {lead.category}
                </span>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/45 to-transparent" />
                <p className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[10px] font-semibold text-white">
                  <span className="rounded bg-brand-600 px-1.5 py-0.5">2026年 最新版</span>
                  編集部が14社を横断調査
                </p>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[19px] font-black leading-[1.55] tracking-tight text-ink transition-colors group-hover:text-brand-700 sm:text-[21px]">
                  {lead.title}
                </h3>
                <p className="mt-2.5 text-[12px] leading-[1.9] text-muted">{lead.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="flex items-center gap-1 text-[10px] font-medium text-muted">
                    <Clock3 className="size-3" />
                    読了 {lead.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-brand-600">
                    記事を読む
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </article>

          <div className="grid gap-3.5 lg:col-span-5">
            {rest.map((article) => (
              <article key={article.href} className="group flex-1">
                <Link
                  href={article.href}
                  className="flex h-full overflow-hidden rounded-xl border border-line bg-white transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft"
                >
                  <div className="relative w-[112px] shrink-0 overflow-hidden bg-brand-50 sm:w-[136px]">
                    <AssetImage
                      src={article.image}
                      alt=""
                      fill
                      sizes="136px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center p-3.5">
                    <p className="text-[9.5px] font-bold text-accent-600">{article.category}</p>
                    <h3 className="mt-1 line-clamp-3 text-[12.5px] font-bold leading-[1.6] text-ink transition-colors group-hover:text-brand-700">
                      {article.title}
                    </h3>
                    <p className="mt-2 flex items-center gap-1 text-[9.5px] text-muted">
                      <Clock3 className="size-2.5" />
                      {article.readTime}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function NewArticlesSection() {
  return (
    <section id="articles" className="border-b border-line/70 bg-canvas py-14 lg:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="New Articles"
          title="新着記事"
          description="スクールの評判、資格対策、学習法。編集部が今読んでほしい記事を更新しています。"
          action={{ label: "記事一覧へ", href: "/articles" }}
        />

        <div className="mt-8 grid gap-7 lg:grid-cols-[1fr_318px]">
          <div className="self-start overflow-hidden rounded-2xl border border-line bg-white">
            {newArticles.map((article, index) => (
              <article
                key={article.href}
                className={`group ${index !== 0 ? "border-t border-line/80" : ""}`}
              >
                <Link href={article.href} className="flex gap-4 p-4 transition-colors hover:bg-brand-50/40 sm:gap-5 sm:p-5">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-brand-50 px-1.5 py-0.5 text-[9.5px] font-bold text-brand-700">
                        {article.category}
                      </span>
                      <time className="text-[10px] font-medium text-muted">{article.date}</time>
                      <span className="flex items-center gap-1 text-[10px] text-muted/80">
                        <Clock3 className="size-2.5" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="mt-2 text-[13.5px] font-bold leading-[1.65] text-ink transition-colors group-hover:text-brand-700 sm:text-[14.5px]">
                      {article.title}
                    </h3>
                  </div>
                  <div className="relative aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-lg bg-brand-50 sm:w-32">
                    <AssetImage
                      src={article.image}
                      alt=""
                      fill
                      sizes="128px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </article>
            ))}
            <div className="border-t border-line/80 bg-white p-3.5 text-center">
              <Link
                href="/articles"
                className="group inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-600 hover:text-brand-800"
              >
                新着記事をもっと見る
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-line bg-white p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-[14px] font-black text-ink">よく読まれている記事</h3>
                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-muted">Popular</span>
              </div>
              <ol className="mt-4 divide-y divide-line/80">
                {popularArticles.map((article, index) => (
                  <li key={article.href}>
                    <Link href={article.href} className="group flex gap-3 py-3">
                      <span
                        className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded font-display text-[10px] font-black ${
                          index < 3 ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-600"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[9.5px] font-semibold text-accent-600">
                          {article.category}
                        </span>
                        <span className="mt-0.5 line-clamp-2 block text-[11.5px] font-bold leading-[1.6] text-ink transition-colors group-hover:text-brand-700">
                          {article.title}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 p-5 text-white">
              <div
                aria-hidden
                className="absolute -right-6 -top-6 size-24 rounded-full border border-white/10"
              />
              <div
                aria-hidden
                className="absolute -right-2 top-10 size-14 rounded-full bg-accent-500/20 blur-xl"
              />
              <MessageCircleQuestion className="size-5 text-warm-400" />
              <p className="mt-3 font-display text-[15px] font-black leading-snug">
                どのスクールが合うか、
                <br />
                一緒に整理しませんか？
              </p>
              <p className="mt-2 text-[10.5px] leading-relaxed text-white/65">
                目的・予算・通える範囲を教えていただければ、編集部が比較表をお送りします。
              </p>
              <Link
                href="/consultation"
                className="mt-4 flex items-center justify-center gap-1.5 rounded-lg bg-white py-2.5 text-[11.5px] font-bold text-brand-800 transition-colors hover:bg-brand-50"
              >
                <Mail className="size-3.5" />
                無料で相談する
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function PickupSection() {
  return (
    <section className="border-b border-line/70 bg-white py-14 lg:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Pick Up"
          title="いま注目の記事"
          description="読者の関心が高いテーマをピックアップ。比較表とあわせてどうぞ。"
          action={{ label: "ピックアップ一覧", href: "/pickup" }}
        />

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "社会人からのやり直し英語・基礎文法が身につく大人向け英語塾", category: "英語力不問", href: "/basic-english/tokyo", image: "/images/study.jpg" },
            { title: "仕事の実務で使える英語力を短期間で鍛えるビジネス英会話", category: "ビジネス英語", href: "/business-english/tokyo", image: "/images/feature-fee.jpg" },
            { title: "80点突破！ハイスコアも目指せるTOEFLオンライン英会話", category: "留学英語", href: "/toefl/online", image: "/images/online.jpg" },
            { title: "英語習得の最後の砦と評される「LIBERTY」とは", category: "特集", href: "/liberty-feature", image: "/images/hero-1.jpg" },
          ].map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group relative overflow-hidden rounded-xl border border-line"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-50">
                <AssetImage
                  src={article.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 50vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3.5">
                  <p className="text-[9px] font-bold text-warm-300">{article.category}</p>
                  <h3 className="mt-1 line-clamp-2 text-[12px] font-bold leading-[1.55] text-white">
                    {article.title}
                  </h3>
                </div>
                <span className="absolute right-2.5 top-2.5 grid size-6 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-colors group-hover:bg-white group-hover:text-ink">
                  <ArrowUpRight className="size-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
