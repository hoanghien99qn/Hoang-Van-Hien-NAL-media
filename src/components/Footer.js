import React from 'react'

import Logo from '../assets/media_image/logo-NAL.jpg'

function Footer() {
  return (
    <div className='footer mt-5 pt-2 mb-3'>
      <div className='container'>
        <div className='row border-fot'>
          <div className='col-xs-12 col-md-6'>
            <div className='logo'>
              <a href='/'>
                <img alt='logo' src={Logo} />
              </a>
            </div>
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='footer-right mt-3'>
              <h3>NAL MEDIA ベトナムオフショア開発にまつわる情報を提供します</h3>
              <p className='text-indent-10'>
                このサイトは、ベトナムにおけるオフショア開発の状況、ベトナムと日本の協力関係、およびテクノロジーに関する最新のニュースを更新し、NALの人々とお客様のストーリーを投稿しております。
              </p>
              <p>住所：3F, 84 Duy Tân, Cầu Giấy, Hà Nội, Việt Nam</p>
              <p>電話番号：(+84)243-787-8654</p>
              <p>メールアドレス：info@nal.vn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer