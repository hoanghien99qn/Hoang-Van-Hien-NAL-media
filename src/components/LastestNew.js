import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const posts = [
  {
    id: 4,
    title: "新型コロナウイルス時代におけるベトナム企業の連携",
    content:
      "Covid-19の経済全体への影響に直面し、最大手民間企業500社は売上を増加させる方法を相互に模索した",
    date: "November 18, 2020",
    author: "admin",
    category_name: "ベトナム情報",
    image: 6,
  },
  {
    id: 5,
    title: "Java言語のメリットとデメリット",
    content:
      "Javaがもたらすメリットにより、学習して使用する人々の数は日々増加しています。 ただし、言語がどれほど強力であっても、特定の制限があり、Javaも例外ではありません。",
    date: "November 17, 2020",
    author: "admin",
    category_name: "オフショア開発",
    image: 7,
  },
  {
    id: 6,
    title: "Dockerfileについて",
    content:
      "Linux、特にDockerにアプローチしている場合は、この記事が役に立つと思います。 この記事では、NALのSE Nguyen NgocDucがDockfileの概要を説明します。",
    date: "November 16, 2020",
    author: "admin",
    category_name: "NALブログ",
    image: 8,
  },
  {
    id: 7,
    title: "ベトナムのビジネス規制改革",
    content:
      "ベトナム政府は2020年から2025年までの事業活動に関する規定の廃止や簡素化の計画を規定した政府決議68号（68/NQ-CP）を公布した。",
    date: "November 13, 2020",
    author: "admin",
    category_name: "ベトナム情報",
    image: 9,
  },
  {
    id: 8,
    title: "ベトナム・日本ICTウィーク2020",
    content:
      "Japan ICTウィークは、今年で14年目を迎え、コロナウイルスの影響のため、オンラインの形式で11/9から11/13までの1週間、「ニューノーマル時代の日越ICT協力」というテーマで行われる。",
    date: "November 11, 2020",
    author: "admin",
    category_name: "NALブログ",
    image: 10,
  },
  {
    id: 9,
    title: "スクラムにおけるスクラムマスターの役割",
    content:
      "スクラムマスターは、チームのパフォーマンスを向上させるためにスクラムモデルで重要な役割を果たす人物です。 スクラムマスターの役割については、次の記事で詳細を説明します。",
    date: "November 10, 2020",
    author: "admin",
    category_name: "オフショア開発",
    image: 11,
  },
  {
    id: 10,
    title: "2020年度　10月までの企業活動統計データー",
    content: "10月と2020年の最初の10ヶ月の企業活動",
    date: "November 9, 2020",
    author: "admin",
    category_name: "ベトナム情報",
    image: 12,
  },
  {
    id: 11,
    title: "ベトナムシステム開発会社NALのエンジニア1日の業務",
    content:
      "今回は日本の案件をメインとしたベトナムシステム開発会社のNALを事例にして、エンジニアの1日の業務を紹介させていただきます。",
    date: "November 6, 2020",
    author: "admin",
    category_name: "NALブログ",
    image: 13,
  },
  {
    id: 12,
    title: "日本顧客はベトナムオフショア会社に要求するもの",
    content:
      "　ベトナムオフショア会社と日本顧客との協力を強化するためには、製品に関連する要求事項を満たすのにベトナムエンジニアは専門知識を継続的に向上すると共に日本の仕事文化に精通する必要がある。",
    date: "November 5, 2020",
    author: "admin",
    category_name: "オフショア開発",
    image: 14,
  },
  {
    id: 13,
    title: "NALが3年連続でベトナムIT会社トップに",
    content:
      "ベトナムソフトウェアと情報技術サービス協会により、NALが「A-IoT」分野で【2020年ベトナム企業トップ10社】の一社として正式に選出された。NALは今年でベトナムIT会社トップランキングに3年連続でランクインした。",
    date: "November 4, 2020",
    author: "admin",
    category_name: "NALブログ",
    image: 15,
  },
];

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../assets/media_image', false, /\.(png|jpe?g|svg)$/));

function LastestNew() {
  return (
    <div className="lestest-new">
      {posts.map((post) => {
        return (
          <div key={post.id} className="new-item mb-3 d-flex">
            <div className="item-img me-2 me-md-4">
              <a href="/">
                <LazyLoadImage alt="image new" src={images[`${post.image - 2}.jpg`]} loading="lazy" />
              </a>
            </div>
            <div className="item-content">
              <div className="cate-title">{post.category_name}</div>
              <h3><a href="/">{post.title}</a></h3>
              <p className="mb-2 mb-md-4">{post.date}, by: {post.author}</p>
              <p className="text-indent-10">
                {post.content}
              </p>
            </div>
          </div>
        );
      })}
      <div className="more-news">
        <a href="/">MORE NEWS
        <svg xmlns="http://www.w3.org/2000/svg" width="6" viewBox="0 0 384 512">
          <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
        </svg>
        </a>
      </div>
    </div>
  );
}

export default LastestNew;
