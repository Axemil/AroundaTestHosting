

import style from "./style.scss"
import VisibilitySensor from "react-visibility-sensor"
import { connect } from "react-redux"
import fetchPosts from "../../../store/actions/fetchPosts"
import uniqueRandom from "unique-random"
import Link from 'next/link'
import { LazyLoadImage } from "react-lazy-load-image-component"

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  }
}

const Spacer = () => (
  <div
    style={{
      gridColumn: "1 / -1",
      height: "100px"
    }}
  ></div>
)

let MoreInteresting = ({ posts, fetchPosts, currentPostId }) => {
  React.useEffect(() => {
    fetchPosts()
  }, [])

  let morePosts

  if (posts.length > 0) {
    morePosts = []
    posts = posts.filter((p) => p.id !== currentPostId)
    let rand = uniqueRandom(0, posts.length - 1)
    for (let c = 0; c < 4; c++) {
      morePosts.push(posts[rand()])
    }
    console.log(morePosts)
  }

  return !morePosts ? (
    <Spacer />
  ) : (
    <div className={style.MoreInteresting}>
      <div className={style.wrapTop}>
        <h1 className={style.title}>More interesting</h1>
        <a className={style.link} href="/blog/">
          All articles
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.57031 1.00012L13.1911 5.62091L8.57031 10.2417" stroke="black" stroke-width="1.7"/>
            <path d="M12.6602 5.61816L-0.000992408 5.61817" stroke="black" stroke-width="1.7"/>
          </svg>
        </a>
      </div>
      <div className={style.advices}>
        {morePosts.map((post, i) => {
          return(
          <a key={i} href={`/blog/${post.slug}/`}>
            <LazyLoadImage
              src={post.imageUrl}
              alt={post.category}
              className={style.img}
            />
            <p>{post.tags.join(", ")}</p>
            <h2>{post.title}</h2>
            {/* <p>{`${post.date} by ${post.author}`}</p> */}
          </a>
          )
        })}
      </div>
      <div className={style.wrapBottom}>
      <a className={style.link} href="/blog/">
          All articles
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.57031 1.00012L13.1911 5.62091L8.57031 10.2417" stroke="black" stroke-width="1.7"/>
            <path d="M12.6602 5.61816L-0.000992408 5.61817" stroke="black" stroke-width="1.7"/>
          </svg>
      </a>
      </div>
    </div>
  )
}
MoreInteresting = connect(mapStateToProps, { fetchPosts })(MoreInteresting)
export default MoreInteresting
