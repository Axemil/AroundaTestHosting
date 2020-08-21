

import Link from 'next/link'
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import slugify from "slugify"
import style from "./style.scss"
// import { Link as LocalLink } from "react-scroll"
import Hungry from "@sections/Hungry"
import MoreInteresting from "@sections/MoreInteresting"
import StartSection from "@sections/StartSection"
import VisibilitySensor from "react-visibility-sensor"
import SubscribeButton from "@simple/SubscribeButton"
import { LazyLoadImage } from "react-lazy-load-image-component"

const localLinkName = (name) => slugify(name).toLocaleLowerCase()

const Paragraph = (props) => <p className={style.regularText}>{props.children}</p>

//const ContentImage = ({ url }) => <img className={style.contentImage} src={url} />
const ContentImage = ({ url }) => (
  <LazyLoadImage threshold={200} className={style.contentImage} src={url} />
)

const UnorderedList = (props) => {
  return <ul className={style.list}>{props.children}</ul>
}

const Quote = (props) => {
  return <div className={style.quotedText}>{props.text}</div>
}

const BlogPost = ({ post: postData }) => {
  if (!postData.content) return null

  const [visibility, setVisibility] = React.useState(true)

  const [interestingVisibility, setInterestingVisibility] = React.useState(true)

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const url = node.data.uri
        let href
        let isUrl

        const firstElem = url.split("//")
        isUrl = firstElem.includes("https:") || firstElem.includes("http:")

        // const words = node.content[0].value.split(" ").map((w) => `${w}\u00a0`)
        const text = node.content[0].value

        if (isUrl) {
          href = url
          return (
            <a href={href} target="_blank" className={style.link}>
              {text}
              {/* {words.map((word, i) => (
                <span key={i} className={style.linkWord}>
                  {word}
                </span>
              ))} */}
            </a>
          )
        } else {
          href = localLinkName(url)
          return (
            <a
              to={href}
              smooth="easeOutQuad"
              duration={800}
              className={style.link}
            >
              {text}
              {/* {words.map((word, i) => (
                <span key={i} className={style.linkWord}>
                  {word}
                </span>
              ))} */}
            </a>
          )
        }
      },

      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <h2 name={localLinkName(children[0])} className={style.h2Heading}>
            {children[0]}
          </h2>
        )
      },

      [BLOCKS.HEADING_3]: (node, children) => {
        return <h3 className={style.h3Heading}>{children}</h3>
      },

      [BLOCKS.HEADING_6]: (node, children) => {
        return <h6 className={style.h6Heading}>{children}</h6>
      },

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const url = `https:${node.data.target.fields.file.url}`
        return <ContentImage url={url} />
      },

      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (children[0] === "[SUBSCRIBE]") {
          return (
            <VisibilitySensor
              onChange={(isVisible) => {
                setVisibility(!isVisible)
              }}
              partialVisibility={"bottom"}
              offset={{ bottom: -400 }}
            >
              <VisibilitySensor
                partialVisibility={"top"}
                offset={{ top: -450 }}
                onChange={(isVisible) => {
                  setVisibility(!isVisible)
                }}
              >
                <Hungry />
              </VisibilitySensor>
            </VisibilitySensor>
          )
        }
        return <Paragraph>{children}</Paragraph>
      },

      [BLOCKS.UL_LIST]: (node, children) => {
        return <UnorderedList items={node}>{children}</UnorderedList>
      },

      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <li className={style.listItem}>{children}</li>
      },

      [BLOCKS.QUOTE]: (node) => {
        return <Quote text={node.content[0].content[0].value} />
      }
    }
  }
  let post

  let content = documentToReactComponents(postData.content, options)

  post = {
    ...postData,
    content
  }

  return (
    post && (
      <section className={style.BlogItem}>
        <div className={style.content}>
          <div className={style.top}>
            <LazyLoadImage
              src={post.imageUrl}
              alt={post.category}
              className={style.img}
            />
            {/* <img src={post.imageUrl} alt={post.category} className={style.img} /> */}
            <div className={style.wrapTitle}>
              <Link href="/blog/">
                <a>
                  Back to blog
                </a>
              </Link>
              <h1>{post.title}</h1>
              <div className={style.author}>
                {/* <img className={style.authorImage} src={post.author.imgUrl} /> */}
                <LazyLoadImage
                  className={style.authorImage}
                  src={post.author.imgUrl}
                />
                <p className={style.authorName}>{post.author.name}</p>
                <p className={style.authorDescription}>{post.author.description}</p>
              </div>
            </div>
          </div>
          <p className={style.postDate}>{post.date}</p>
          {post.content}
          <div
            style={{
              opacity: visibility ? 100 : 0,
              transition: "opacity 0.2s ease-in-out"
            }}
            className={style.stickyAside}
          >
            <p className={style.title}>Newsletter</p>
            <p className={style.text}>Get stories to your email every Tuesday!</p>
            <SubscribeButton className={style.subscribeButton} text="Subscribe" />
          </div>
        </div>
        <Hungry blue />
        <MoreInteresting currentPostId={post.id} />
        <StartSection />
      </section>
    )
  )
}

export default BlogPost
