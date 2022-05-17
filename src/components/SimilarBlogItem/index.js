import {BsFillStarFill,BsFillTagFill, BsFillClockFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import './index.css'

const SimilarBlogItem = props => {
  const {blogDetails} = props
  const {
    id,
    blogName,
    blogLink,
    authorName,
    authorBlogLink,
    publishedTime,
    readTime,
    realtedTag,
    blogDescription
  } = blogDetails
  return (
    <li className="similar-blog-cont">
      <Link to={`blog/id`} className="similar-blog-link">
        <div className="similar-blog-cont-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
            alt="similar blog logo"
            className="similar-blog-logo"
          />
          <div>
            <h1 className="similar-blog-title">{authorName}</h1>
            <div className="similar-blog-cont-1">
              <BsFillStarFill className="similar-blog-icon star" />
              <p className="similar-blog-title">{publishedTime}</p>
            </div>
          </div>
        </div>
        <h1 className="description-head">{blogName}</h1>
        <p className="description-para">{blogDescription}</p>
        <div className="similar-blog-cont-1">
          <div className="similar-blog-cont-3">
            <BsFillTagFill className="similar-blog-icon location" />
            <p className="location-text">{realtedTag}</p>
          </div>
          <div className="similar-blog-cont-3">
            <BsFillClockFill className="similar-blog-icon location" />
            <p className="location-text">{readTime}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default SimilarBlogItem
