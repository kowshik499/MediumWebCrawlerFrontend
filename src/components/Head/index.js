import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Head = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="header-cont">
      <ul className="header-content list-cont">
        <li>
          <div className='website-logo-cont'>
          <Link to="/" className='website-logo-link'>
            <h1 className='website-logo-head'>Web Crawler</h1>
          </Link>
          </div>
        </li>
        <li>
          <ul className="nav-items-cont">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <button type="button" className="logout-btn" onClick={onClickLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Head)
