
import style from "./style.scss"

import Link from 'next/link'
import { LazyLoadImage } from "react-lazy-load-image-component"

const ListWorks = ({ posts }) => {
  return (
    <div className={style.ListWorks}>
      {posts &&
        posts.map(({ id, slug, imageUrl, tags, title, date, author, authorImage }) => {
          console.log(authorImage);
          return (
            <div key={id}>
              <Link href={`/blog/${slug}/`}>
                <a className={style.item} title={title}>
                  <div
                    className={style.thumbnailContainer}
                  >
                    <LazyLoadImage alt={title} className={style.thumbnail} src={imageUrl} />
                  </div>
                  <p className={style.tag}>{tags.join(", ")}</p>
                  <h2 className={style.title}>{title}</h2>
                  <div className={style.authorWrapper}>
                    <LazyLoadImage alt={author} className={style.authorImage} src={authorImage} />
                    <div className={style.textWrapper}>
                      <p className={style.authorText}>{author}</p>
                      <p className={style.dateText}>{date}</p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          )
        })}
    </div>
  )
}
export default ListWorks
