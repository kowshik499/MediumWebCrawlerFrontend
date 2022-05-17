import {Component} from 'react'
import {BsFillStarFill, BsFillTagFill, BsFillClockFill} from 'react-icons/bs'
import {ImNewTab} from 'react-icons/im'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Head from '../Head'
import SimilarJobItem from '../SimilarBlogItem'

import './index.css'

const blogDetails = {
  id: 'eee6425d-cb04-4fd4-90d6-bdb44b1fecea',
  blogLink: 'https://medium.com//marketingaffiliate/why-starting-your-affiliate-marketing-business-is-a-good-idea-f3b7d263f9bb?source=topics_v2---------3-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
  blogTitle: 'Why Starting Your Affiliate Marketing Business Is a Good Idea',
  blogSubTitle: 'Affiliate marketing is the way to go!',
  authorName: 'Ed-iTFollow',
  authorBlogLink: 'https://medium.com//@ed-it-us?source=post_page-----f3b7d263f9bb--------------------------------',
  publishedDate: 'May 15',
  readTime: '1 min read',
  clapCount: '140140140',
  commentCount: '',
  blogContent: ' $$$$$$$$$$ There is a huge load of approaches to bring in cash on the web. Subsidiary promotion permits you to get familiar with everything with different items and specialties. Odds are that you have a drawn-out undertaking as a top priority, something that you couldn’t want anything more than to…'
}

const blogsData = [
  {
    id: '9c756e12-fa47-4126-b1e5-50b937716ef8',
    blogName: '7 Passive Income Ideas To Easily Make $500/Day',
    blogLink: 'https://medium.com//@czmclaudiu/7-passive-income-ideas-to-easily-make-500-day-e7c40b2c7a41?source=topics_v2---------0-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Claudiu',
    authorBlogLink: 'https://medium.com//@czmclaudiu?source=topics_v2---------0-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·11 hours ago',
    readTime: '5 min read',
    relatedTag: 'Passive Income',
    blogDescription: 'Passive income is the holy grail of money. If you can make money while you sleep, you can work less and do more things that are important to you. —  Start an Online Business. Share your expertise and help others while generating income to the next level. You have the expertise. You know how to do something better than most people in your field, so why not monetize it? You can start a blog, website, or podcast and share your knowledge with others who need help. If you’re really good at what you do, people will come…'
  },
  {
    id: '1ad93413-0a52-4e63-a392-5c134dbe9fb6',
    blogName: 'A Simple Math Equation Helped a Couple Pay Off $40,000 in 6 Months',
    blogLink: 'https://medium.com//@swavedigest/a-simple-math-equation-helped-a-couple-pay-off-40-000-in-6-months-6518069843bb?source=topics_v2---------1-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Swavedigest',
    authorBlogLink: 'https://medium.com//@swavedigest?source=topics_v2---------1-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·8 hours ago',
    readTime: '3 min read',
    relatedTag: '40000',
    blogDescription: 'Amy Crockett refinanced $40,000 in credit card debt to make payments more manageable.. She calculated the amount of interest she was paying daily, which was about $2. She manually paid $4 to $10 a day on top of monthly payments, and paid off the debt in six months. LoadingSomething is…'
  },
  {
    id: 'd5476d37-b511-4c70-8b75-dd6121bbec6d',
    blogName: 'Sunday thoughts: if we want to be a research superpower, why don’t we act like one? (and why does no one outside HE know about the REF)',
    blogLink: 'https://medium.com//@jonathansimons1982/sunday-thoughts-if-we-want-to-be-a-research-superpower-why-dont-we-act-like-one-3d7b816d6a8b?source=topics_v2---------2-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Jonathan Simons',
    authorBlogLink: 'https://medium.com//@jonathansimons1982?source=topics_v2---------2-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·11 hours ago',
    readTime: '4 min read',
    relatedTag: 'Schools',
    blogDescription: 'The REF. The Research Excellence Framework. Quite possibly the bit of measurement in public services that has the biggest difference between a sector that obsesses over it, and everyone else that is largely oblivious to it — or, to paraphrase Palmerston on Schleswig-Holstein, knows about it but can’t begin to…'
  },
  {
    id: '4b7c1449-07b7-4baf-9644-2b10c68ce0c4',
    blogName: 'Why Starting Your Affiliate Marketing Business Is a Good Idea',
    blogLink: 'https://medium.com//marketingaffiliate/why-starting-your-affiliate-marketing-business-is-a-good-idea-f3b7d263f9bb?source=topics_v2---------3-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Ed-iT',
    authorBlogLink: 'https://medium.com//@ed-it-us?source=topics_v2---------3-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·8 hours ago',
    readTime: '1 min read',
    relatedTag: 'Marketing',
    blogDescription: 'Affiliate marketing is the way to go! —  There is a huge load of approaches to bring in cash on the web. Subsidiary promotion permits you to get familiar with everything with different items and specialties. Odds are that you have a drawn-out undertaking as a top priority, something that you couldn’t want anything more than to consistently…'
  },
  {
    id: 'f7a992f4-a53f-4174-9b97-7c1999dc35aa',
    blogName: 'Four Reasons Highly Intelligent People Fail To Make Money Online',
    blogLink: 'https://medium.com//swlh/four-reasons-highly-intelligent-people-fail-to-make-money-online-495d51b054de?source=topics_v2---------4-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Jano le Roux',
    authorBlogLink: 'https://medium.com//@janoleroux?source=topics_v2---------4-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·14 hours ago',
    readTime: '5 min read',
    relatedTag: 'Money',
    blogDescription: 'I accidentally turned my struggle into a $9,000/month side business from my desk with my fiancé in my early 20s — but because I was being too smart, I nearly f*cked it all up. As an entrepreneur and marketing consultant, I’ve met my share of highly intelligent people. I’ve seen…'
  },
  {
    id: '66d0240a-32e5-470b-a5b2-a2ba5f247c75',
    blogName: 'Peloton Is Spinning Out of Control',
    blogLink: 'https://medium.com//@stephenmoore/peloton-is-spinning-out-of-control-254154287e7a?source=topics_v2---------5-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Stephen Moore',
    authorBlogLink: 'https://medium.com//@stephenmoore?source=topics_v2---------5-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·2 days ago',
    readTime: '4 min read',
    relatedTag: 'Business',
    blogDescription: 'The company’s stock price just hit an all-time low —  Motivation That Moves You. On May 9, Peloton unveiled a brand refresh, including a new campaign featuring its most popular instructors and a first-ever tagline. While the tagline will do little to motivate users into fitness — a constant human struggle that takes more than flashy advertising — it certainly…'
  },
  {
    id: 'd59eb8ad-6b21-4df4-b5ba-e7fc98566e8b',
    blogName: 'A Short History of Our Favorite Chocolate Bars',
    blogLink: 'https://medium.com//@keith-mcnulty/a-short-history-of-our-favorite-chocolate-bars-ac5f7d666480?source=topics_v2---------6-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Keith McNulty',
    authorBlogLink: 'https://medium.com//@keith-mcnulty?source=topics_v2---------6-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·1 day ago',
    readTime: '8 min read',
    relatedTag: 'Culture',
    blogDescription: 'The story of ten of our favorite treats —  I’m a total chocoholic! I have been as far back as I can remember. And I’m lucky enough to live in a time where chocolate has been widely available and where a small number of super-brands have provided reliable satisfaction over the past few decades. Although the size and shape…'
  },
  {
    id: 'd591eddb-30c5-43e5-81fb-c4932b2ac70b',
    blogName: '後疫情時代 少人數的觀光專列旅遊行程正在發酵',
    blogLink: 'https://medium.com//@joelhu/後疫情時代-少人數的觀光專列旅遊行程正在發酵-17f85f491ddb?source=topics_v2---------7-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Joel Fukuzawa',
    authorBlogLink: 'https://medium.com//@joelhu?source=topics_v2---------7-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·11 hours ago',
    readTime: '5 min read',
    relatedTag: '日本',
    blogDescription: '提到日本的觀光列車，「九州七星號（ななつ星 in 九州）」豪華觀光列車應該是大家印象最深的，九州七星號不但豪華，搭乘的費用也很驚人，一個人兩天一夜的行程至少要從 65…'
  },
  {
    id: 'aa142754-1d9e-4d58-844b-ce3fa4983274',
    blogName: 'Why Every Company is Now a Tech Company',
    blogLink: 'https://medium.com//@sanchit-gera/why-every-company-is-now-a-tech-company-87a388537321?source=topics_v2---------8-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    authorName: 'Sanchit Gera',
    authorBlogLink: 'https://medium.com//@sanchit-gera?source=topics_v2---------8-84--------------------e27713ba_63f3_43f6_b0e6_c3c81a6ed309-------19',
    publishedTime: '·15 hours ago',
    readTime: '4 min read',
    relatedTag: 'Software Development',
    blogDescription: 'Around 10 years ago, Marc Andreseen published a famous article on how tech companies were disrupting traditional industries that once seemed immune to change. As the argument went, tech companies could leverage the power of the internet to deliver new experiences that were more convenient, accessible and far cheaper for…'
  }
]

const statusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class BlogDetails extends Component {
  state = {
    blogData: {},
    similarBlogsData: [],
    apiStatus: statusConstants.success,
  }

  renderFailureView = () => (
    <div className="blog-details-failure-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <h1 className="blog-details-failure-head">Oops! Something Went Wrong</h1>
      <p className="blog-details-failure-para">
        We cannot seem to find the page you are looking for.
      </p>
      <button className="retry-btn" type="button" >
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="loader-container" testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  contentBreaker = (blogContent) =>{

  }

  renderSuccessView = () => {
    const {
      blogTitle,
      blogSubTitle,
      authorName,
      authorBlogLink,
      readTime,
      publishedDate,
      commentCount,
      clapCount,
      blogContent
    } = blogDetails
    return (
      <>
        <div className="blog-details-cont">
          <div className="blog-details-cont-1">
            <img
              src="https://res.cloudinary.com/avk/image/upload/v1652549630/blog_image_fre5og.png"
              alt="blog logo"
              className="blog-details-logo"
            />
            <div>
              <h1 className="blog-details-author-name">{authorName}</h1>
              <div className="blog-cont-1">
                <BsFillStarFill className="blog-details-icon star" />
                <p className="blog-details-published-date">{publishedDate}</p>
              </div>
            </div>
          </div>
          <div className="blog-details-cont-2">
            <div className="blog-details-cont-1">
              <div className="blog-details-cont-3">
                <BsFillTagFill className="blog-details-icon location" />
                <p className="location-text">{}</p>
              </div>
              <div className="blog-details-cont-3">
                <BsFillClockFill className="blog-details-icon location" />
                <p className="location-text">{readTime}</p>
              </div>
            </div>
            <div>
              <p className="blog-details-title">{}</p>
            </div>
          </div>
          <hr className="line" />
          <div className="blog-details-cont-2">
            <div>
              <h1 className="blog-details-title">{blogTitle}</h1>
              <p className="blog-details-sub-title">{blogSubTitle}</p>
            </div>
          </div>
          <p className="description-para">{blogContent}</p>
          
          {/* <div className="life-at-company-cont">
            <div className="life-at-company-data">
              <h1 className="description-head">Life at Company</h1>
              <p className="description-para">{lifeAtCompany.description}</p>
            </div>
            <img
              src={lifeAtCompany.imageUrl}
              alt="life at company"
              className="life-at-company-img"
            />
          </div> */}
        </div>
        <div className="similar-jobs-head-cont">
          <h1 className="similar-jobs-head">Similar Blogs</h1>
        </div>
        <ul className="similar-jobs-cont">
          {blogsData.map(blog => (
            <SimilarJobItem blogDetails={blog} key={blog.id} />
          ))}
        </ul>
      </>
    )
  }

  renderJobDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case statusConstants.success:
        return this.renderSuccessView()
      case statusConstants.inProgress:
        return this.renderLoadingView()
      case statusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Head />
        <div className="app-cont">{this.renderJobDetails()}</div>
      </>
    )
  }
}

export default BlogDetails
