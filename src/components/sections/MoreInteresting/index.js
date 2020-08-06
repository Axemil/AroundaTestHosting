

import style from "./style.scss"
import VisibilitySensor from "react-visibility-sensor"
import { connect } from "react-redux"
import fetchPosts from "../../../store/actions/fetchPosts"
import uniqueRandom from "unique-random"
import Link from 'next/link'

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
  useEffect(() => {
    fetchPosts()
  }, [])

  let morePosts

  if (posts.length > 0) {
    morePosts = []
    posts = posts.filter((p) => p.id !== currentPostId)
    let rand = uniqueRandom(0, posts.length - 1)
    for (let c = 0; c < 2; c++) {
      morePosts.push(posts[rand()])
    }
  }

  return !morePosts ? (
    <Spacer />
  ) : (
    <div className={style.MoreInteresting}>
      <div className={style.wrapTop}>
        <h1 className={style.title}>More interesting</h1>
        <a className={style.link} href="/blog">
          All articles
        </a>
      </div>
      <div className={style.advices}>
        {morePosts.map((post, i) => (
          <a key={i} href={`/blog/${post.slug}`}>
            <p>{post.tags.join(", ")}</p>
            <h2>{post.title}</h2>
            <p>{`${post.date} by ${post.author}`}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
MoreInteresting = connect(mapStateToProps, { fetchPosts })(MoreInteresting)
export default MoreInteresting
