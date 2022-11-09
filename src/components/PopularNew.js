import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const posts = [
  {
    id: 14,
    title: "ベトナム オフショア開発に関する問題解答",
    category_name: "オフショア開発",
    image: 14,
  },
  {
    id: 15,
    title: "2020年 情報技術産業の動向",
    category_name: "オフショア開発",
    image: 15,
  },
  {
    id: 16,
    title: "ベトナム オフショア 会社を選ぶ７つの基準",
    category_name: "オフショア開発",
    image: 16,
  },
  {
    id: 17,
    title: "ベトナム観光への情報技術適用",
    category_name: "ベトナム情報",
    image: 17,
  },
  {
    id: 18,
    title: "ベトナム オフショア 会社への選抜 メリットおよびデメリット",
    category_name: "オフショア開発",
    image: 18,
  },
];

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets/media_image", false, /\.(png|jpe?g|svg)$/)
);

function PopularNew() {
  return (
    <div className="popular-new mb-4">
      {posts.map((post) => {
        return (
          <div key={post.id} className="item d-flex mb-3">
            <div className="item-img">
              <a href="/">
                <LazyLoadImage alt="image popularnew" src={images[`${post.image}.jpg`]} />
              </a>
            </div>
            <div className="item-content">
              <div className="cate-title">
                <span>{post.category_name}</span>
              </div>
              <div className="item-title">
                <h3><a href="/">{post.title}</a></h3>
              </div>
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

export default PopularNew;
