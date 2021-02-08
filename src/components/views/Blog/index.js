

import style from "./style.scss"
import StartSection from "@sections/StartSection"
import Tags from "@sections/Tags"
// import ListWorks from "@sections/ListWorks";
import ListWorksVisible from "@sections/ListWorksVisible"
import Hungry from "@sections/Hungry"
import PopupSearch from "@sections/PopupSearch"
import MetaData from '@simple/MetaData'
import LetsTalk from "@sections/LetsTalk"
import MoreInteresting from "@sections/MoreInteresting"

// const TempSeparator = () => (
//   <div
//     style={{
//       height: "150px",
//       gridColumn: "1 / -1"
//     }}
//   ></div>
// )

const Blog = ({isMobile}) => {
  const [search, setSearch] = React.useState(true)
  return (
    <section className={style.Blog}>
      <PopupSearch search={search} setSearch={setSearch} />
      <Tags isMobile={isMobile} />
      <ListWorksVisible />
      <Hungry blue className={style.blogHungry} />
      <MoreInteresting currentPostId={-1} />
      <LetsTalk />
      
      <MetaData h1="Blog & News"
                title="Blog — Useful Articles on Web & Mobile App Design | Arounda"
                description="Arounda blog is where you will find newest design stories, insights, latest design trends and useful tips that will help your business grow."
                link="https://arounda.agency/blog" />
    </section>
  )
}
export default Blog
