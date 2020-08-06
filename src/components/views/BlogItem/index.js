
import Link from 'next/link'
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import style from "./style.scss"
import contentfulClient from "@/functions/contentful-client"
import blogs from "@/data/BlogItems"
import Hungry from "@sections/Hungry"
import StartSection from "@sections/StartSection"
import MoreInteresting from "@sections/MoreInteresting"
import slugify from "slugify"
import { composeDate } from "@/functions/lib"
// import { Link as LocalLink } from "react-scroll"
import ScrollSpy from "react-scrollspy"

const localLinkName = (name) => slugify(name).toLocaleLowerCase()

const Paragraph = (props) => <p className={style.regularText}>{props.children}</p>

const ContentImage = ({ url }) => <img className={style.contentImage} src={url} />

const UnorderedList = (props) => {
  return <ul className={style.list}>{props.children}</ul>
}

const Quote = (props) => {
  return (
    <ScrollSpy onUpdate={() => console.log("++++++++++++++++")}>
      <div className={style.quotedText}>{props.text}</div>
    </ScrollSpy>
  )
}

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const url = node.data.uri
      let href
      let isUrl

      const firstElem = url.split("//")
      isUrl = firstElem.includes("https:") || firstElem.includes("http:")

      if (isUrl) {
        href = url
        return (
          <a href={href} className={style.link}>
            {children}
          </a>
        )
      } else {
        href = localLinkName(url)
        return (
          <LocalLink
            to={href}
            smooth="easeOutQuad"
            duration={800}
            className={style.link}
          >
            {children}
          </LocalLink>
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
        return <Hungry />
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

const BlogItem = (props) => {
  const [post, setPost] = React.useState()

  const slug = getSlug(props)

  React.useEffect(() => {
    contentfulClient
      .getEntries({
        content_type: "blogPost",
        "fields.slug[match]": slug
      })
      .then((res) => {
        console.log(res)

        const { title, content, date, category } = res.items[0].fields
        const imageUrl = `https:${res.items[0].fields.image.fields.file.url}`

        let author = res.items[0].fields.author
        author = {
          name: author.fields.name,
          description: author.fields.description,
          imgUrl: `https:${author.fields.image.fields.file.url}`
        }

        setPost({
          title,
          date: composeDate(date),
          category,
          author,
          imageUrl,
          content: documentToReactComponents(content, options)
        })
      })
      .catch((err) => console.log(err))
  }, [])

  console.log(post)

  return !post ? null : (
    <section className={style.BlogItem}>
      <div className={style.content}>
        <div className={style.top}>
          <img src={post.imageUrl} alt={post.category} className={style.img} />
          <div className={style.wrapTitle}>
            <Link href="/blog">
              <a>
                Back to blog
              </a>
            </Link>
            <h1>{post.title}</h1>
            <div className={style.author}>
              <img className={style.authorImage} src={post.author.imgUrl} />
              <p className={style.authorName}>{post.author.name}</p>
              <p className={style.authorDescription}>{post.author.description}</p>
            </div>
          </div>
        </div>
        <p className={style.postDate}>{post.date}</p>
        {post.content}
        <div id="sticky-aside" className={style.stickyAside}>
          <p className={style.title}>Newsletter</p>
          <p className={style.text}>Get stories to your email every Tuesday!</p>
          <button className={style.subscribeButton}>Subscribe</button>
        </div>
      </div>
      {/* {blogs.map(blog =>
        blog.id == props.match.params.id ? (
          <div key={blog.id} className={style.content}>
            <div className={style.top}>
              <img src={blog.img} alt={blog.tag} className={style.img} />
              <div className={style.wrapTitle}>
                <Link href="/blog">Back to blog</Link>
                <h1>{blog.title}</h1>
                <p>{blog.public}</p>
              </div>
            </div>
            <div className={style.body}>
              <span className={style.case}>{blog.caseStudy.title}</span>
              <p className={style.caseText1}>{blog.caseStudy.text1}</p>
              <ul>
                {blog.caseStudy.list.map(item => (
                  <li key={item.id}>{item.text}</li>
                ))}
              </ul>
              <p className={style.caseText2}>{blog.caseStudy.text2}</p>
              <h2 className={style.whatTitle}>{blog.what.title}</h2>
              <p className={style.whatText}>{blog.what.text}</p>
              <p className={style.whatText2}>{blog.what.text2}</p>
              <ul className={style.touchingList}>
                {blog.what.list.map(item => (
                  <li key={item.id}>{item.text}</li>
                ))}
              </ul>
              <p className={style.whatText3}>{blog.what.text3}</p>
              <p className={style.whatText4}>{blog.what.text4}</p>
              <p className={style.whatText5}>{blog.what.text5}</p>
              <img
                className={style.whatImg}
                src={blog.what.img}
                alt={blog.what.imgDescription}
              />
              <span className={style.whatImgDescription}>
                {blog.what.imgDescription}
              </span>
              <p className={style.whatText6}>{blog.what.text6}</p>
              <p className={style.whatText7}>{blog.what.text7}</p>
              <p className={style.whatText8}>{blog.what.text8}</p>
              <p className={style.whatText9}>{blog.what.text9}</p>
              <h2 className={style.whatPreverb}>{blog.what.proverb}</h2>
              <span className={style.whatPreverbDescription}>
                {blog.what.proverbDescription}
              </span>
              <h2 className={style.conclusionTitle}>{blog.conclusion.title}</h2>
              <p className={style.conclusionText}>{blog.conclusion.text}</p>
              <p>{blog.conclusion.text2}</p>
            </div>
          </div>
        ) : null
      )} */}
      <Hungry blue />
      <MoreInteresting />
      <div className={style.wrapStartSection}>
        <StartSection />
      </div>
    </section>
  )
}
export default BlogItem

function getSlug(props) {
  return props.location.pathname
    .split("/")
    .splice(-1)[0]
    .toLowerCase()
}
