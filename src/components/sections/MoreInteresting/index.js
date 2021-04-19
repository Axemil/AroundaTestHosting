import { useState } from 'react'
import style from "./style.scss"
import VisibilitySensor from "react-visibility-sensor"
import { connect } from "react-redux"
import fetchPostsInteresting from "../../../store/actions/fetchPostsInteresting"
import uniqueRandom from "unique-random"
import Link from 'next/link'
import { LazyLoadImage } from "react-lazy-load-image-component"
// import addPostsInter from "./addPostsInter"
import client from "../../../functions/contentful-client"
import { composeDate } from "../../../functions/lib"
import Carousel from 'react-grid-carousel'

const mapStateToProps = (state, ownProps) => {
  return {
    postsInter: state.posts
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

const transformResponse = (res) => {
  return res.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    slug: item.fields.slug,
    tag: item.fields.tags[0].fields.tag,
    tags: item.fields.tags.map((t) => t.fields.tag),
    date: composeDate(item.fields.date),
    imageUrl: item.fields.image.fields.file.url,
    author: item.fields.author.fields.name,
    authorImage: item.fields.author.fields.image.fields.file.url,
    total: res.total
  }))
}

let MoreInteresting = ({ postsInter, fetchPostsInteresting, currentPostId }) => {
  React.useEffect(() => {
    let p = client.getAllPostsInteresting()
    p.then((res) => {
      setMorePosts(transformResponse(res));
    })
  }, [])

  let [morePosts,setMorePosts] = useState([])

  // if(array != undefined){
  //   setTimeout(() => {
  //     morePosts.push(array.map((item) => item))
  //   },1000)
    
  // }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

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
          if(i < 4)
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
MoreInteresting = connect(mapStateToProps, { fetchPostsInteresting })(MoreInteresting)
export default MoreInteresting
