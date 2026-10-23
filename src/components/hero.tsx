import Link from "next/link";
import { AssetImage } from "./asset-image";
import { ArrowRight, BadgeCheck, MapPin, Search, Sparkles, Star } from "lucide-react";

const stats = [
  { value: "380", unit: "校以上", label: "掲載スクール数" },
  { value: "120", unit: "校", label: "編集部の取材実績" },
  { value: "42", unit: "項目", label: "料金・サービス比較" },
  { value: "85", unit: "万人", label: "月間のべ読者数" },
];

const tags = [
  { label: "オンライン英会話", href: "/online-eikaiwa" },
  { label: "TOEIC", href: "/toeic" },
  { label: "英検", href: "/eiken" },
  { label: "大人のやり直し英語", href: "/basic-english" },
  { label: "子供英語", href: "/children" },
  { label: "語学留学", href: "/study-abroad" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line/70 bg-[linear-gradient(160deg,#f2f8fe_0%,#f8fbfe_42%,#f6f9fc_100%)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(36,119,189,0.1),transparent_45%),radial-gradient(circle_at_88%_18%,rgba(22,163,122,0.09),transparent_42%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,#dbe8f4_1px,transparent_1px),linear-gradient(to_bottom,#dbe8f4_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]"
      />

      <div className="section-shell relative py-10 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 py-1.5 pl-2 pr-3.5 text-[11px] font-bold text-brand-700 shadow-sm backdrop-blur">
              <span className="grid size-6 place-items-center rounded-full bg-brand-600 text-white">
                <Sparkles className="size-3.5" />
              </span>
              取材にもとづく、リアルな英語学習ガイド
            </p>

            <h1 className="mt-5 font-display text-[clamp(2rem,3.9vw,3rem)] font-black leading-[1.22] tracking-[-0.02em] text-ink">
              あなたに合う
              <br className="sm:hidden" />
              <span className="relative inline-block whitespace-nowrap px-0.5">
                <span aria-hidden className="absolute inset-x-0 bottom-[0.12em] -z-10 h-[0.38em] rounded-sm bg-warm-100" />
                英語学校
              </span>
              が、
              <br />
              きっと見つかる。
            </h1>

            <p className="mt-5 max-w-xl text-[13.5px] leading-[1.95] text-ink-soft sm:text-sm">
              英会話スクール、オンライン英会話、資格対策、語学留学。
              <br className="hidden sm:block" />
              編集部が実際に取材し、料金とサービスを同じ目線で比較しました。
              <br className="hidden sm:block" />
              あなたの目標から、学びの一歩を探せます。
            </p>

            <div className="mt-7 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-card backdrop-blur sm:p-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="flex items-center gap-1.5 text-[12px] font-bold text-ink">
                  <Search className="size-4 text-brand-600" />
                  条件からスクールを探す
                </p>
                <span className="text-[10px] font-semibold text-muted">3分で比較</span>
              </div>

              <form action="/school-ranking" className="grid gap-2.5 sm:grid-cols-[1fr_1fr_auto]">
                <label className="block">
                  <span className="sr-only">学習の目的</span>
                  <select
                    name="purpose"
                    defaultValue=""
                    className="h-11 w-full cursor-pointer rounded-xl border border-line bg-white pl-3 pr-8 text-[12.5px] font-medium text-ink outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                  >
                    <option value="" disabled>
                      目的を選ぶ
                    </option>
                    <option>ビジネス英語</option>
                    <option>日常英会話</option>
                    <option>TOEIC・TOEFL対策</option>
                    <option>英検・受験対策</option>
                    <option>子供・親子で学ぶ</option>
                    <option>留学準備</option>
                  </select>
                </label>

                <label className="block">
                  <span className="sr-only">エリア</span>
                  <select
                    name="area"
                    defaultValue=""
                    className="h-11 w-full cursor-pointer rounded-xl border border-line bg-white pl-3 pr-8 text-[12.5px] font-medium text-ink outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                  >
                    <option value="" disabled>
                      エリアを選ぶ
                    </option>
                    <option>オンライン</option>
                    <option>東京</option>
                    <option>神奈川</option>
                    <option>愛知</option>
                    <option>大阪</option>
                    <option>福岡</option>
                  </select>
                </label>

                <button
                  type="submit"
                  className="group flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 text-[12.5px] font-bold text-white shadow-[0_12px_24px_-14px_rgba(23,96,159,0.9)] transition-all hover:bg-brand-700"
                >
                  <Search className="size-4" />
                  探す
                </button>
              </form>

              <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-bold text-muted">人気の条件</span>
                {["オンライン", "月1万円以内", "マンツーマン"].map((label) => (
                  <Link
                    key={label}
                    href={`/school-ranking?keyword=${encodeURIComponent(label)}`}
                    className="rounded-full bg-brand-50 px-2.5 py-1 text-[10.5px] font-semibold text-brand-700 transition-colors hover:bg-brand-100"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2">
              {tags.map((tag) => (
                <Link
                  key={tag.label}
                  href={tag.href}
                  className="rounded-full border border-line/90 bg-white/60 px-2.5 py-1 text-[10.5px] font-medium text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  #{tag.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(36,119,189,0.16),transparent_65%)] blur-2xl"
            />

            <div className="relative ml-auto aspect-[4/4.6] w-[88%] overflow-hidden rounded-[2rem] border-[5px] border-white bg-brand-100 shadow-float sm:w-[84%]">
              <AssetImage
                src="/images/hero-1.jpg"
                alt="英語レッスンで一緒に学ぶ受講生たち"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-ink shadow-sm backdrop-blur">
                <MapPin className="size-3 text-brand-600" />
                実際のレッスンを取材
              </span>
            </div>

            <div className="absolute -left-2 bottom-10 hidden w-36 overflow-hidden rounded-2xl border-[4px] border-white shadow-card sm:block lg:-left-6">
              <div className="relative aspect-square">
                <AssetImage
                  src="/images/hero-3.jpg"
                  alt="英語の参考書で学習する女性"
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
              <p className="bg-white px-2.5 py-2 text-[9.5px] font-bold leading-tight text-ink">
                編集部スタッフが
                <br />
                実際に体験取材
              </p>
            </div>

            <div className="absolute -right-1 top-5 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-card backdrop-blur sm:right-0 sm:top-8">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3 fill-warm-400 text-warm-400" />
                ))}
                <span className="ml-1 text-[11px] font-black text-ink">4.8</span>
              </div>
              <p className="mt-1 text-[9px] font-medium text-muted">受講者レビュー 214件</p>
              <p className="mt-2 flex items-center gap-1 border-t border-line pt-2 text-[9px] font-bold text-accent-600">
                <BadgeCheck className="size-3" />
                編集部の取材済みスクール
              </p>
            </div>

            <div className="absolute -bottom-3 right-1 rounded-xl bg-ink px-3.5 py-2.5 text-white shadow-card sm:right-4">
              <p className="font-display text-lg font-black leading-none">
                120<span className="ml-0.5 text-[10px] font-bold">校</span>
              </p>
              <p className="mt-1 text-[9px] font-medium text-white/65">取材実績</p>
            </div>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-y-5 border-t border-line/80 pt-6 sm:grid-cols-4 sm:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-baseline gap-2 px-2 sm:justify-center ${i > 0 ? "sm:border-l sm:border-line" : ""}`}
            >
              <dt className="order-2 text-[10.5px] font-medium tracking-wide text-muted">{stat.label}</dt>
              <dd className="order-1 font-display text-2xl font-black tracking-tight text-ink">
                {stat.value}
                <span className="ml-0.5 text-[10px] font-bold text-brand-600">{stat.unit}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 flex justify-end">
          <Link
            href="/about"
            className="group inline-flex items-center gap-1 text-[10.5px] font-semibold text-muted transition-colors hover:text-brand-700"
          >
            編集部の比較基準を見る
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
