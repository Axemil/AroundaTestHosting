

import Link from 'next/link'
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import slugify from "slugify"
import style from "./style.scss"
// import { Link as LocalLink } from "react-scroll"
import Hungry from "@sections/Hungry"
import LetsTalk from "@sections/LetsTalk"
import MoreInteresting from "@sections/MoreInteresting"
import StartSection from "@sections/StartSection"
import VisibilitySensor from "react-visibility-sensor"
import SubscribeButton from "@simple/SubscribeButton"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { route } from 'next/dist/next-server/server/router'
import { useRouter } from 'next/router'

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
  const router = useRouter()

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
              // to={href}
              onClick={e => {
                // console.log(router)
                link = "";
                const base = router.asPath;
                let link = base.split('#')[0] + "#" + href;
                router.push(link);
              }}
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
                {/* <Hungry /> */}
              <div
                // style={{
                //   opacity: visibility ? 100 : 0,
                //   transition: "opacity 0.2s ease-in-out"
                // }}
                // className={style.stickyAside}
                className={style.subscribeMobile}
              >
                <div className={style.subscribeContent}>
                  <p className={style.title}>Newsletter</p>
                  <p className={style.text}>Get stories to your email every Tuesday!</p>
                </div>
                <SubscribeButton className={style.subscribeButton} text="Subscribe" />
              </div>
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

  // console.log(post)

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
              {/* <Link href="/blog/">
                <a title="Back to blog">
                  Back to blog
                </a>
              </Link> */}
              <h4>{post.tags[0].fields.tag}</h4>
              <h1>{post.title}</h1>
              <div className={style.author}>
                {/* <img className={style.authorImage} src={post.author.imgUrl} /> */}
                <LazyLoadImage
                  className={style.authorImage}
                  alt={post.author.name}
                  src={post.author.imgUrl}
                />
                <p className={style.authorName}>{post.author.name}</p>
                <p className={style.authorDescription}><span className={style.desctopDesc}>{post.author.description}</span><span className={style.mobileDesc}>{post.date}</span></p>
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
          <div className={style.stickySoc}>
            <a href="">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M9.99844 2.49062H11.3678V0.105625C11.1316 0.073125 10.3191 0 9.37281 0C7.39844 0 6.04594 1.24187 6.04594 3.52437V5.625H3.86719V8.29125H6.04594V15H8.71719V8.29187H10.8078L11.1397 5.62563H8.71656V3.78875C8.71719 3.01812 8.92469 2.49062 9.99844 2.49062Z" fill="#141515"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="15" height="15" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.16631 0.761658C1.13514 0.761658 0.460938 1.43878 0.460938 2.32875C0.460938 3.19908 1.11505 3.89551 2.12674 3.89551H2.14631C3.19765 3.89551 3.85194 3.19908 3.85194 2.32875C3.83228 1.43878 3.19765 0.761658 2.16631 0.761658Z" fill="#141515"/>
                <path d="M0.640625 5.13379H3.65517V14.2032H0.640625V5.13379Z" fill="#141515"/>
                <path d="M11.0517 4.9209C9.42542 4.9209 8.33494 6.44903 8.33494 6.44903V5.13376H5.32031V14.2032H8.33477V9.13846C8.33477 8.86732 8.35443 8.59661 8.43408 8.40271C8.652 7.86129 9.14793 7.30039 9.98075 7.30039C11.0716 7.30039 11.5078 8.13209 11.5078 9.35132V14.2032H14.5221V9.00293C14.5221 6.2172 13.0349 4.9209 11.0517 4.9209Z" fill="#141515"/>
              </svg>
            </a>
            <a href="">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M15 2.84906C14.4422 3.09375 13.8478 3.25594 13.2281 3.33469C13.8656 2.95406 14.3522 2.35594 14.5809 1.635C13.9866 1.98937 13.3303 2.23969 12.6309 2.37938C12.0666 1.77844 11.2622 1.40625 10.3847 1.40625C8.68219 1.40625 7.31156 2.78813 7.31156 4.48219C7.31156 4.72594 7.33219 4.96031 7.38281 5.18344C4.82625 5.05875 2.56406 3.83344 1.04437 1.96688C0.779062 2.42719 0.623438 2.95406 0.623438 3.52125C0.623438 4.58625 1.17188 5.53031 1.98937 6.07687C1.49531 6.0675 1.01063 5.92406 0.6 5.69812C0.6 5.7075 0.6 5.71969 0.6 5.73187C0.6 7.22625 1.66594 8.4675 3.06375 8.75344C2.81344 8.82188 2.54063 8.85469 2.2575 8.85469C2.06063 8.85469 1.86187 8.84344 1.67531 8.80219C2.07375 10.02 3.20438 10.9153 4.54875 10.9444C3.5025 11.7628 2.17406 12.2559 0.735938 12.2559C0.48375 12.2559 0.241875 12.2447 0 12.2137C1.36219 13.0922 2.97656 13.5938 4.7175 13.5938C10.3763 13.5938 13.47 8.90625 13.47 4.84312C13.47 4.70719 13.4653 4.57594 13.4587 4.44563C14.0691 4.0125 14.5819 3.47156 15 2.84906Z" fill="#141515"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="15" height="15" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="">
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M15 6.00753L8.76629 0.528381V3.79734H7.44095C3.33138 3.79734 0 6.46766 0 9.76175V11.4941L0.588684 10.977C2.59014 9.21925 5.4221 8.21772 8.39115 8.21772H8.76629V11.4867L15 6.00753Z" fill="#141515"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="15" height="12" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        {/* <div className={style.lineFooter}></div> */}
        <Hungry />
        <MoreInteresting currentPostId={post.id} />
        <LetsTalk />
      </section>
    )
  )
}

export default BlogPost
