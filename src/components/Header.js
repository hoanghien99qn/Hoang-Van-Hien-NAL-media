import React from 'react'

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='topbar mt-3'>
          <div className='row'>
            <div className='col-10 col-md-8 d-flex'>
                <a href='/' className='btn-link me-2 d-flex align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width='10' viewBox="0 0 512 512"><path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/></svg>
                    <span className='ms-1'>ACTIVE TAG</span>
                </a>
                <a href='/' className='btn-link me-2 d-flex align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width='10' viewBox="0 0 512 512"><path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/></svg>
                    <span className='ms-1'>ACTIVE TAG</span>
                </a>
                <a href='/' className='btn-link me-2 d-flex align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width='10' viewBox="0 0 512 512"><path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/></svg>
                    <span className='ms-1'>ACTIVE TAG</span>
                </a>
            </div>
            <div className='col-2 col-md-4 d-flex justify-content-end'>
              <a href='/' className='btn-link active d-block ms-2'>
                JA
              </a>
              <a href='/' className='btn-link d-block ms-2'>
                VI
              </a>
              <a href='/' className='btn-link d-block ms-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width='10' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className='mid-header'>
          <div className='logo text-center'>
            <h1 className='logo'><a href='/'>NAL MEDIA</a></h1>
            <h1 className='sublogo'>ベトナムオフショア開発にまつわる情報を提供します</h1>
          </div>
        </div>
        <div className='menu-bar mt-2 mb-4 py-2 d-none d-md-block'>
          <ul className='menu-list d-flex align-items-center flex-direction-row justify-content-center'>
            <li>
              <a className='btn-link px-3' href='/'>オフショア開発</a>
            </li>
            <li>
              <a className='btn-link px-3' href='/'>NALブログ</a>
            </li>
            <li>
              <a className='btn-link px-3' href='/'>ベトナム情報</a>
            </li>
            <li>
              <a className='btn-link px-3' href='/'>お問い合わせ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header