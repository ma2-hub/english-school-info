export type NavGroup = {
  title: string;
  links: { label: string; href: string; badge?: string }[];
};

export type NavItem = {
  label: string;
  href: string;
  groups?: NavGroup[];
  featured?: { label: string; title: string; href: string; image: string };
};

export const navigation: NavItem[] = [
  {
    label: "英会話スクール",
    href: "/school",
    groups: [
      {
        title: "目的から探す",
        links: [
          { label: "目的・エリア別ランキング", href: "/school-ranking", badge: "人気" },
          { label: "英会話教室の料金比較", href: "/tuition-fee-comparison" },
          { label: "ビジネス英語コーチング", href: "/coaching-school" },
          { label: "大人のやり直し英語", href: "/basic-english" },
          { label: "初心者向け英会話", href: "/beginner" },
        ],
      },
      {
        title: "スタイルから探す",
        links: [
          { label: "マンツーマン英会話", href: "/private-lesson" },
          { label: "英語の発音矯正", href: "/pronunciation" },
          { label: "英会話講師派遣", href: "/teacher-dispatch" },
          { label: "英会話カフェ", href: "/eikaiwa-cafe" },
          { label: "女性向けスクール", href: "/women" },
        ],
      },
      {
        title: "年齢・目的別",
        links: [
          { label: "幼児・子供の英語教室", href: "/children" },
          { label: "高校・大学受験の英語塾", href: "/entrance-exam" },
          { label: "業界別ビジネス英語", href: "/business-english" },
          { label: "スクール記事一覧", href: "/school/articles" },
        ],
      },
    ],
    featured: {
      label: "2026年 最新版",
      title: "大手英会話教室の特徴・料金を徹底比較",
      href: "/famous-eikaiwa",
      image: "/images/feature-fee.jpg",
    },
  },
  {
    label: "オンライン英会話",
    href: "/online-eikaiwa",
    groups: [
      {
        title: "講師で選ぶ",
        links: [
          { label: "ネイティブ講師に学ぶ", href: "/online/native" },
          { label: "日本人講師に学ぶ", href: "/online/japanese-teacher" },
          { label: "子供用・家族で使える", href: "/online/kids" },
          { label: "中級・上級者向け", href: "/online/advanced" },
        ],
      },
      {
        title: "目的で選ぶ",
        links: [
          { label: "オンライン英語コーチング", href: "/online/coaching" },
          { label: "オンラインTOEICコーチング", href: "/online/toeic" },
          { label: "看護師・医師の医療英語", href: "/online/medical" },
          { label: "オンライン国内留学", href: "/online/kokunai" },
        ],
      },
      {
        title: "試験対策",
        links: [
          { label: "TOEIC対策", href: "/toeic/online" },
          { label: "TOEFL対策", href: "/toefl/online" },
          { label: "IELTS対策", href: "/ielts/online" },
          { label: "英検対策", href: "/eiken/online" },
          { label: "オンライン英会話記事一覧", href: "/online-eikaiwa/articles" },
        ],
      },
    ],
    featured: {
      label: "編集部おすすめ",
      title: "自宅で完結。オンライン英会話の選び方",
      href: "/online/guide",
      image: "/images/online.jpg",
    },
  },
  {
    label: "英語資格試験",
    href: "/exams",
    groups: [
      {
        title: "試験別対策",
        links: [
          { label: "英検対策", href: "/eiken" },
          { label: "TOEIC対策", href: "/toeic" },
          { label: "TOEFL対策", href: "/toefl" },
          { label: "IELTS対策", href: "/ielts" },
          { label: "TEAP・GTEC対策", href: "/teap" },
        ],
      },
      {
        title: "スケジュール・情報",
        links: [
          { label: "2026年 試験日程一覧", href: "/schedule", badge: "新着" },
          { label: "自宅で受けられる英語試験", href: "/online-exam" },
          { label: "大学入試と英語民間試験", href: "/university-exam" },
          { label: "就職・転職に役立つ資格", href: "/career" },
        ],
      },
      {
        title: "対策スクール",
        links: [
          { label: "TOEFL対策塾・予備校", href: "/toefl/school" },
          { label: "TOEIC対策スクール", href: "/toeic/school" },
          { label: "IELTS対策塾", href: "/ielts/school" },
          { label: "英検対策塾", href: "/eiken/school" },
        ],
      },
    ],
  },
  {
    label: "語学留学",
    href: "/study-abroad",
    groups: [
      {
        title: "留学先で選ぶ",
        links: [
          { label: "フィリピン・セブ島留学", href: "/study-abroad/philippines" },
          { label: "アメリカ留学", href: "/study-abroad/america" },
          { label: "カナダ留学", href: "/study-abroad/canada" },
          { label: "オーストラリア留学", href: "/study-abroad/australia" },
          { label: "マルタ・アイルランド留学", href: "/study-abroad/malta" },
        ],
      },
      {
        title: "準備・情報",
        links: [
          { label: "留学の基礎知識", href: "/study-abroad/basics" },
          { label: "留学エージェント比較", href: "/study-abroad/agent" },
          { label: "留学前の英会話レッスン", href: "/study-abroad/preparation" },
          { label: "国際交流シェアハウス", href: "/sharehouse" },
          { label: "語学留学の記事一覧", href: "/study-abroad/articles" },
        ],
      },
    ],
    featured: {
      label: "人気の特集",
      title: "費用・期間・目的から考える留学の選び方",
      href: "/study-abroad/guide",
      image: "/images/hero-2.jpg",
    },
  },
  {
    label: "教材・アプリ",
    href: "/materials",
    groups: [
      {
        title: "学習教材",
        links: [
          { label: "初心者向け英語教材", href: "/materials/beginner" },
          { label: "子供向け英語教材", href: "/materials/kids" },
          { label: "リスニング対策", href: "/materials/listening" },
          { label: "スピーキング対策", href: "/materials/speaking" },
        ],
      },
      {
        title: "アプリ・ツール",
        links: [
          { label: "英語学習アプリ", href: "/apps" },
          { label: "発音矯正アプリ", href: "/apps/pronunciation" },
          { label: "単語帳アプリ", href: "/apps/vocabulary" },
          { label: "教材の記事一覧", href: "/materials/articles" },
        ],
      },
    ],
  },
  {
    label: "英語の勉強法",
    href: "/learning",
    groups: [
      {
        title: "スキル別",
        links: [
          { label: "英作文・ライティング", href: "/learning/writing" },
          { label: "発音矯正", href: "/learning/pronunciation" },
          { label: "シャドーイング", href: "/learning/shadowing" },
          { label: "役立つ英会話フレーズ集", href: "/learning/phrases", badge: "人気" },
        ],
      },
      {
        title: "読みもの",
        links: [
          { label: "社会人の英語やり直し", href: "/learning/restart" },
          { label: "英語学習の習慣化", href: "/learning/habit" },
          { label: "勉強法の記事一覧", href: "/learning/articles" },
        ],
      },
    ],
  },
];

export type RankingSchool = {
  rank: number;
  name: string;
  nameEn: string;
  category: string;
  copy: string;
  features: string[];
  price: string;
  score: number;
  reviews: number;
  image: string;
  badge?: string;
};

export const rankingSchools: RankingSchool[] = [
  {
    rank: 1,
    name: "プログリット",
    nameEn: "PROGRIT",
    category: "英語コーチング",
    copy: "専属コンサルタントと挑む、2か月集中の英語学習プログラム。",
    features: ["完全マンツーマン", "学習計画の毎日サポート", "社会人向け"],
    price: "月額 91,300円〜",
    score: 4.8,
    reviews: 214,
    image: "/images/interview-1.jpg",
    badge: "総合ランキング 1位",
  },
  {
    rank: 2,
    name: "ENGLISH COMPANY",
    nameEn: "ENGLISH COMPANY",
    category: "英語コーチング",
    copy: "第二言語習得研究に基づく、科学的な英語トレーニング。",
    features: ["研究成果ベース", "TOEIC実績多数", "オンライン対応"],
    price: "月額 86,900円〜",
    score: 4.7,
    reviews: 186,
    image: "/images/interview-2.jpg",
  },
  {
    rank: 3,
    name: "トライズ",
    nameEn: "TORAIZ",
    category: "英語コーチング",
    copy: "1年間で英語を話せる自分へ。徹底した学習管理が強み。",
    features: ["1年プログラム", "ネイティブ講師", "振替柔軟"],
    price: "月額 71,500円〜",
    score: 4.6,
    reviews: 158,
    image: "/images/study.jpg",
  },
];

export type Article = {
  title: string;
  href: string;
  category: string;
  image: string;
  excerpt?: string;
  date?: string;
  readTime?: string;
};

export const featureArticles: Article[] = [
  {
    title: "大手英会話教室の特徴・料金比較！最も安くコスパ良いスクールは？",
    href: "/famous-eikaiwa",
    category: "料金比較",
    image: "/images/feature-fee.jpg",
    excerpt: "14社の料金体系を編集部が横断調査。入会金・教材費まで含めた「本当の費用」がわかります。",
    readTime: "12分",
  },
  {
    title: "《大学入試を有利に》共通テストで選ぶべき英語民間資格試験と対策法",
    href: "/university-exam",
    category: "英語資格",
    image: "/images/feature-exam.jpg",
    excerpt: "英検・TEAP・GTEC。志望校別の活用方法と、高2から始める最短ルートを解説します。",
    readTime: "9分",
  },
  {
    title: "《例文》丸暗記で使える日常英会話フレーズ集｜挨拶・食事・道案内",
    href: "/phrases/daily",
    category: "英語学習",
    image: "/images/feature-phrase.jpg",
    excerpt: "シチュエーション別に120フレーズを厳選。音声つきで、そのまま会話に使えます。",
    readTime: "7分",
  },
  {
    title: "英会話教室で自然な出会いを作るコツは？素敵な人が多いスクール",
    href: "/eikaiwa-meeting",
    category: "英語の雑学",
    image: "/images/feature-meet.jpg",
    excerpt: "趣味としての英会話を楽しむ人に取材。長く続く学びの場のつくり方を聞きました。",
    readTime: "6分",
  },
];

export const newArticles: Article[] = [
  {
    title: "イングリッシュイノベーションズの評判・口コミ【受講生の感想まとめ】",
    href: "/english-innovations-reviews",
    category: "IELTS",
    image: "/images/online.jpg",
    date: "2026.06.18",
    readTime: "10分",
  },
  {
    title: "IELTS対策塾・スクールの社会人向け対策講座5選【2026年版】",
    href: "/ielts-school-adult",
    category: "IELTS",
    image: "/images/feature-exam.jpg",
    date: "2026.06.11",
    readTime: "8分",
  },
  {
    title: "VERSANT対策オンラインコーチングスクールのおすすめ5選を比較",
    href: "/versant-online",
    category: "VERSANT",
    image: "/images/online.jpg",
    date: "2026.06.03",
    readTime: "9分",
  },
  {
    title: "大学受験対策におすすめな高校生向け英語塾ランキング6選",
    href: "/eigo-juku-ranking",
    category: "受験英語",
    image: "/images/study.jpg",
    date: "2026.05.27",
    readTime: "11分",
  },
];

export const popularArticles: { title: string; href: string; category: string }[] = [
  { title: "社会人からのやり直し英語｜基礎文法が身につく大人向け英語塾", href: "/basic-english/tokyo", category: "やり直し英語" },
  { title: "仕事で使える英語力を鍛えるビジネス英会話スクール", href: "/business-english/tokyo", category: "ビジネス英語" },
  { title: "80点突破！ハイスコアも目指せるTOEFLオンライン英会話", href: "/toefl/online", category: "TOEFL" },
  { title: "英会話スクールの料金相場｜月謝・入会金・教材費の内訳", href: "/tuition-fee-comparison", category: "料金" },
  { title: "初心者が最短で話せるようになる英会話の始め方", href: "/beginner/start", category: "初心者" },
];

export type Interview = {
  title: string;
  href: string;
  category: string;
  image: string;
  excerpt: string;
  person: string;
  school: string;
};

export const interviews: Interview[] = [
  {
    title: "《講師取材》Liberty English Academyの模擬授業を体験した感想",
    href: "/liberty-trial",
    category: "講師インタビュー",
    image: "/images/interview-3.jpg",
    excerpt: "TOEFL100点突破の秘策と、本質的な英語力が身につく勉強法を特別に教えてもらいました。",
    person: "Liberty English Academy",
    school: "英語学校",
  },
  {
    title: "《塾長取材》プログリット神田校でコーチング効果を体験",
    href: "/progrit-interview",
    category: "塾長インタビュー",
    image: "/images/interview-1.jpg",
    excerpt: "多忙な社会人が2か月で英語力を伸ばす仕組み。実際のカウンセリングを取材しました。",
    person: "プログリット 神田校",
    school: "英語コーチング",
  },
  {
    title: "《講師取材》STRAILの専門的な英語指導をオンラインで受講",
    href: "/strail-trial",
    category: "講師インタビュー",
    image: "/images/interview-2.jpg",
    excerpt: "第二言語習得研究の視点から、話せない・聞き取れない理由を解剖します。",
    person: "STRAIL",
    school: "オンラインコーチング",
  },
];

export type ExamTab = {
  id: string;
  label: string;
  summary: string;
  note: string;
  rows: { month: string; date: string; period: string; status?: "done" | "open" | "soon" }[];
};

export const examTabs: ExamTab[] = [
  {
    id: "toeic",
    label: "TOEIC",
    summary: "TOEIC L&R Test / 2026年",
    note: "2026年6月時点の情報です。日程はTOEIC L&R Testの場合、受付期間はインターネット申込の場合です。",
    rows: [
      { month: "1月", date: "開催終了", period: "申込締切", status: "done" },
      { month: "2月", date: "開催終了", period: "申込締切", status: "done" },
      { month: "3月", date: "開催終了", period: "申込締切", status: "done" },
      { month: "4月", date: "開催終了", period: "申込締切", status: "done" },
      { month: "5月", date: "開催終了", period: "申込締切", status: "done" },
      { month: "6月", date: "6月13日・28日", period: "受付終了", status: "done" },
      { month: "7月", date: "7月12日", period: "受付中", status: "open" },
      { month: "8月", date: "8月23日", period: "5月21日〜7月13日", status: "soon" },
      { month: "9月", date: "9月5日・27日", period: "7月14日〜8月14日", status: "soon" },
      { month: "10月", date: "未公開", period: "未公開" },
      { month: "11月", date: "未公開", period: "未公開" },
      { month: "12月", date: "未公開", period: "未公開" },
    ],
  },
  {
    id: "eiken",
    label: "英検",
    summary: "従来型英検・一次試験（本会場）/ 2026年",
    note: "2026年6月時点の情報です。日程・会場は申込方法や受験級によって異なります。",
    rows: [
      { month: "1月", date: "2027年1月24日", period: "10月30日〜12月14日", status: "soon" },
      { month: "2月", date: "—", period: "—" },
      { month: "3月", date: "—", period: "—" },
      { month: "4月", date: "—", period: "—" },
      { month: "5月", date: "開催終了", period: "申込締切", status: "done" },
      { month: "6月", date: "—", period: "—" },
      { month: "7月", date: "—", period: "—" },
      { month: "8月", date: "—", period: "—" },
      { month: "9月", date: "—", period: "—" },
      { month: "10月", date: "10月4日", period: "6月30日〜9月7日", status: "soon" },
      { month: "11月", date: "—", period: "—" },
      { month: "12月", date: "—", period: "—" },
    ],
  },
  {
    id: "toefl",
    label: "TOEFL",
    summary: "TOEFL iBT Test / 2026年",
    note: "2026年6月時点の情報です。空席がある場合はテストの2日前まで申込可能です（+手数料US$40）。",
    rows: [
      { month: "6月", date: "6月10日・13日・17日・20日", period: "テストの7日前まで", status: "open" },
      { month: "7月", date: "7月1日・4日・5日・8日・11日", period: "テストの7日前まで", status: "open" },
      { month: "8月", date: "8月1日・3日〜5日・7日〜8日", period: "テストの7日前まで", status: "soon" },
      { month: "9月", date: "9月2日・5日・9日・12日・13日", period: "テストの7日前まで", status: "soon" },
      { month: "10月", date: "10月3日・7日・10日・11日・14日", period: "テストの7日前まで", status: "soon" },
      { month: "11月", date: "11月4日・7日・8日・11日・14日", period: "テストの7日前まで", status: "soon" },
      { month: "12月", date: "12月2日・5日・6日・9日・12日", period: "テストの7日前まで", status: "soon" },
    ],
  },
  {
    id: "teap",
    label: "TEAP",
    summary: "TEAP / 2026年",
    note: "2026年6月時点の情報です。日程は地域によって一部異なります。",
    rows: [
      { month: "7月", date: "7月19日", period: "5月18日〜6月19日", status: "soon" },
      { month: "9月", date: "9月13日", period: "7月13日〜8月12日", status: "soon" },
      { month: "11月", date: "11月22日", period: "9月18日〜10月21日", status: "soon" },
      { month: "1月〜6月・8月・10月・12月", date: "実施なし", period: "—", status: "done" },
    ],
  },
];

export type PrefectureRanking = {
  id: string;
  label: string;
  universities: { rank: number; name: string; faculty: string; score: number; secondFaculty?: string; secondScore?: number }[];
};

export const prefectureRankings: PrefectureRanking[] = [
  {
    id: "tokyo",
    label: "東京",
    universities: [
      { rank: 1, name: "早稲田大学", faculty: "教育学部／英語英文学科", score: 70, secondFaculty: "文化構想学部", secondScore: 70 },
      { rank: 2, name: "上智大学", faculty: "外国語学部／英語学科", score: 70, secondFaculty: "文学部／英文学科", secondScore: 65 },
      { rank: 3, name: "立教大学", faculty: "異文化コミュニケーション学部", score: 65 },
      { rank: 4, name: "法政大学", faculty: "グローバル教養学部", score: 65, secondFaculty: "文学部／英文学科", secondScore: 60 },
      { rank: 5, name: "青山学院大学", faculty: "文学部／英米文学科", score: 60 },
    ],
  },
  {
    id: "kanagawa",
    label: "神奈川",
    universities: [
      { rank: 1, name: "専修大学", faculty: "文学部／英語英米文学科", score: 55 },
      { rank: 2, name: "明治学院大学", faculty: "文学部／英文学科", score: 55 },
      { rank: 3, name: "神奈川大学", faculty: "外国語学部／英語英文学科", score: 50 },
      { rank: 4, name: "東海大学", faculty: "文学部／英語文化コミュニケーション学科", score: 50 },
      { rank: 5, name: "関東学院大学", faculty: "国際文化学部／英語文化学科", score: 60 },
    ],
  },
  {
    id: "aichi",
    label: "愛知",
    universities: [
      { rank: 1, name: "南山大学", faculty: "外国語学部／英米学科", score: 60 },
      { rank: 2, name: "中京大学", faculty: "国際学部／言語文化学科", score: 55 },
      { rank: 3, name: "愛知大学", faculty: "国際コミュニケーション学部／英語学科", score: 55 },
      { rank: 4, name: "名古屋外国語大学", faculty: "外国語学部／英米語学科", score: 55 },
      { rank: 5, name: "名城大学", faculty: "外国語学部／国際英語学科", score: 50 },
    ],
  },
  {
    id: "osaka",
    label: "大阪",
    universities: [
      { rank: 1, name: "立命館大学", faculty: "グローバル教養学部／グローバル教養学科", score: 60, secondFaculty: "文学部／国際コミュニケーション学科", secondScore: 55 },
      { rank: 2, name: "関西大学", faculty: "外国語学部", score: 60 },
      { rank: 3, name: "関西外国語大学", faculty: "英語キャリア学部／英語キャリア学科", score: 60, secondFaculty: "外国語学部／英米語学科", secondScore: 55 },
      { rank: 4, name: "近畿大学", faculty: "文芸学部／英語英米文学専攻", score: 55, secondFaculty: "国際学部／グローバル専攻", secondScore: 55 },
      { rank: 5, name: "摂南大学", faculty: "外国語学部／外国語学科", score: 50 },
    ],
  },
];

export const pickupArticles = [
  {
    title: "社会人からのやり直し英語・基礎文法が身につく大人向け英語塾",
    href: "/basic-english/tokyo",
    category: "英語力不問",
    image: "/images/study.jpg",
  },
  {
    title: "仕事の実務で使える英語力を短期間で鍛えるビジネス英会話スクール",
    href: "/business-english/tokyo",
    category: "ビジネス英語",
    image: "/images/feature-fee.jpg",
  },
  {
    title: "80点突破！ハイスコアも目指せるTOEFLオンライン英会話",
    href: "/toefl/online",
    category: "留学英語",
    image: "/images/online.jpg",
  },
  {
    title: "英語習得の最後の砦と評される「LIBERTY」とは",
    href: "/liberty-feature",
    category: "特集",
    image: "/images/hero-1.jpg",
  },
];

export const footerLinks = [
  {
    title: "英会話スクール",
    links: [
      { label: "スクール記事一覧", href: "/school" },
      { label: "目的・エリア別ランキング", href: "/school-ranking" },
      { label: "料金比較", href: "/tuition-fee-comparison" },
      { label: "ビジネス英語", href: "/business-english" },
      { label: "子供・幼児向け", href: "/children" },
    ],
  },
  {
    title: "オンライン・留学",
    links: [
      { label: "オンライン英会話", href: "/online-eikaiwa" },
      { label: "オンラインコーチング", href: "/online/coaching" },
      { label: "語学留学", href: "/study-abroad" },
      { label: "留学エージェント", href: "/study-abroad/agent" },
      { label: "国内留学", href: "/online/kokunai" },
    ],
  },
  {
    title: "資格・学習",
    links: [
      { label: "英語資格試験", href: "/exams" },
      { label: "2026年 試験日程", href: "/schedule" },
      { label: "英語学習アプリ", href: "/apps" },
      { label: "学習教材", href: "/materials" },
      { label: "英語の勉強法", href: "/learning" },
    ],
  },
  {
    title: "運営について",
    links: [
      { label: "編集部について", href: "/about" },
      { label: "取材・掲載のご依頼", href: "/contact" },
      { label: "プライバシーポリシー", href: "/privacy" },
      { label: "利用規約", href: "/terms" },
      { label: "お問い合わせ", href: "/contact" },
    ],
  },
];

const derivedPlaceholderPaths = [
  ...navigation.flatMap((item) => [
    item.href,
    ...(item.featured ? [item.featured.href] : []),
    ...(item.groups?.flatMap((group) => group.links.map((link) => link.href)) ?? []),
  ]),
  ...featureArticles.map((article) => article.href),
  ...newArticles.map((article) => article.href),
  ...popularArticles.map((article) => article.href),
  ...interviews.map((article) => article.href),
  ...pickupArticles.map((article) => article.href),
  ...footerLinks.flatMap((column) => column.links.map((link) => link.href)),
  ...rankingSchools.map(
    (school) => `/school/${school.nameEn.toLowerCase().replace(/\s+/g, "-")}`,
  ),
  ...examTabs.map((tab) => `/schedule/${tab.id}`),
];

const extraPlaceholderPaths = [
  "/search",
  "/school-ranking",
  "/consultation",
  "/features",
  "/pickup",
  "/articles",
  "/interview",
  "/schedule",
  "/university",
  "/exam-notes",
  "/online-exam",
  "/university-exam",
  "/career",
  "/returnees",
  "/eigo-juku/tokyo",
  "/eigo-juku/yokohama",
  "/eigo-juku/chiba",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/sitemap",
];

export const placeholderPaths = Array.from(
  new Set([...derivedPlaceholderPaths, ...extraPlaceholderPaths]),
).filter((path) => path.startsWith("/") && !path.includes("?"));
