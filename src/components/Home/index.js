import {Link} from 'react-router-dom'

import Head from '../Head'

import './index.css'

const Home = () => (
  <>
    <Head />
    <div className="home-cont">
      <div className="home-content">
        <h1 className="home-content-head">Scrape Data From Medium.com Website</h1>
        <p className="home-content-description">
          Discover stories, thinking, and expertise from writers on any topic by scraping their blogs from Medium.com 
        </p>
        <Link to="/blogs" className="blog-link">
          <button type="button" className="find-blogs-btn">
            Find Blogs
          </button>
        </Link>
      </div>
      <div className='home-img-cont'>
        <img
          src='https://res.cloudinary.com/avk/image/upload/v1652537933/crawler_img_wjfo6r.png'
          className='home-img'
        />
      </div>
    </div>
  </>
)

export default Home
