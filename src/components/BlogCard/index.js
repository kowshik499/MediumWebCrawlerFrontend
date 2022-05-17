import {Link} from 'react-router-dom'
import {BsFillStarFill, BsFillTagFill, BsFillClockFill} from 'react-icons/bs'
// import {MdLocationOn} from 'react-icons/md'

import './index.css'

const BlogCard = props => {
  const {blogDetails} = props
  console.log("Entered into blogCard")
  const{
    id,
    blogName,
    blogLink,
    authorName,
    authorBlogLink,
    publishedTime,
    readTime,
    relatedTag,
    blogDescription
  } = blogDetails

  return (
    <li className="blog-cont">
      <div className="blog-cont-1">
        <img
          src= "https://res.cloudinary.com/avk/image/upload/v1652549630/blog_image_fre5og.png"
          alt="company logo"
          className="company-logo"
        />
        <div>
          <a href={authorBlogLink} target="_blank" className='blog-link'>
            <p className="blog-title">{authorName}</p>
          </a>
          <div className="blog-cont-1">
            <BsFillStarFill className="blog-icon star" />
            <p className="blog-title">{publishedTime}</p>
          </div>
        </div>
      </div>
      <div className="blog-cont-2">
        <div className="blog-cont-1">
          <div className="blog-cont-3">
            <BsFillTagFill className="blog-icon location" />
            <p className="location-text">{relatedTag}</p>
          </div>
          <div className="blog-cont-3">
            <BsFillClockFill className="blog-icon location" />
            <p className="location-text">{readTime}</p>
          </div>
        </div>
        <div>
          <p className="blog-title">{}</p>
        </div>
      </div>
      <hr className="line" />
      <Link to="/blog/id" className='blog-link'>
        <h1 className="description-head">{blogName}</h1>
        <p className="description-para">{blogDescription}</p>
      </Link>
    </li>
  )
}

export default BlogCard
