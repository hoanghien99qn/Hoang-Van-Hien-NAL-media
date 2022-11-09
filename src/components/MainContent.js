import React from 'react'
import LastestNew from './LastestNew'
import PopularNew from './PopularNew'
import { LazyLoadImage } from "react-lazy-load-image-component";
import TagsView from './TagsView'

import Banner1 from '../assets/media_image/banner-1.jpg'
import Banner2 from '../assets/media_image/banner-2.jpg'
import Banner3 from '../assets/media_image/banner-3.jpg'

function MainContent() {
  return (
    <div className='main-content mt-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-8'>
            <div className='heading-title'>
              <h3>Lastest News</h3>
              <div className='title-line'></div>
            </div>
            <LastestNew />
          </div>
          <div className='col-xs-12 col-md-4'>
            <div className='heading-title'>
              <h3>Popular News</h3>
              <div className='title-line popular'></div>
            </div>
            <PopularNew />
            <div className='heading-title'>
              <h3>Tags</h3>
              <div className='title-line tags'></div>
            </div>
            <TagsView />
            <div className='banner mb-4'>
              <a href='/'>
                <LazyLoadImage alt='banner' loading='lazy' src={Banner1} />
              </a>
            </div>
            <div className='banner mb-4'>
              <a href='/'>
                <LazyLoadImage alt='banner' loading='lazy' src={Banner2} />
              </a>
            </div>
            <div className='banner mb-4'>
              <a href='/'>
                <LazyLoadImage alt='banner' loading='lazy' src={Banner3} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent