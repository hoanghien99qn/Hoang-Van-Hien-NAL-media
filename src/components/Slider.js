import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider1 from "../assets/media_image/55.png";
import Slider2 from "../assets/media_image/2.jpg";
import Slider3 from "../assets/media_image/3.jpg";

function Slider() {
  return (
    <div className="section-slider">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 mb-3 mb-md-0">
            <div className="overflow-hidden position-relative">
              <a href="/">
                <LazyLoadImage alt="main slider" className="slide-img-1" src={Slider1} />
              </a>
              <div className="slide-content position-absolute py-2 px-3">
                <div className="slide-content-wrap">
                  <h3>スクラムチェックリスト</h3>
                  <p className="text-2-line text-indent-10">
                    スクラムマスターになることを目指しているあなた、またはプロのスクラムマスターになるための最初の一歩を踏み出しているあなたも、NALのSEのTran
                    Duy
                    Truongによる以下の記事でスクラムマストターが何をすべきか、仕事の概要を説明られます
                  </p>
                </div>
                <div className="slide-content-label red position-absolute">
                  <span className="p-1 d-block">HOT NEWS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="row">
              <div className="col-12">
                <div className="overflow-hidden position-relative">
                  <a href="/">
                    <LazyLoadImage alt="slider 2" className="slide-img-2" src={Slider2} />
                  </a>
                  <div className="slide-content position-absolute py-2 px-3">
                    <div className="slide-content-wrap">
                      <h3>日本とベトナム オフショア開発の課題</h3>
                      <p className="mb-2">admin, October 27, 2020</p>
                      <p className="text-2-line text-indent-10">
                      現在ベトナムと日本は政治経済共に良好な関係を築いており、ベトナム オフショア 会社から
                      </p>
                    </div>
                    <div className="slide-content-label purple position-absolute">
                      <span className="p-1 d-block">TOP VIEWED</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="overflow-hidden position-relative">
                  <a href="/">
                    <LazyLoadImage alt="slider 3" className="slide-img-2" src={Slider3} />
                  </a>
                  <div className="slide-content position-absolute py-2 px-3">
                    <div className="slide-content-wrap">
                      <h3>ベトナム オフショア 失敗の原因</h3>
                      <p className="mb-2">admin, October 14, 2020</p>
                      <p className="text-2-line text-indent-10">
                      オフショア市場の魅力を求め、多くのテクノロジー企業がソフトウェアのアウトソーシングに目
                      </p>
                    </div>
                    <div className="slide-content-label blue position-absolute">
                      <span className="p-1 d-block">TOP VIEWED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
