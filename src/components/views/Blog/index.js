

import { Provider } from "react-redux"
import store from "@/functions/store"

import blogs from "@/data/BlogItems"
import style from "./style.scss"
import StartSection from "@sections/StartSection"
import SearchTags from "@sections/SearchTags"
import Tags from "@sections/Tags"
// import ListWorks from "@sections/ListWorks";
import ListWorksVisible from "@sections/ListWorksVisible"
import Hungry from "@sections/Hungry"
import slugify from "slugify"
import contentfulClient from "@/functions/contentful-client"
import MoreInteresting from "@sections/MoreInteresting"
import PopupSearch from "@sections/PopupSearch"
import { composeDate } from "@/functions/lib"
import SubscribeButton from "@simple/SubscribeButton"
import Footer from "@sections/Footer"

const TempSeparator = () => (
  <div
    style={{
      height: "150px",
      gridColumn: "1 / -1"
    }}
  ></div>
)

const Blog = (props) => {
  const [search, setSearch] = React.useState(false)
  return (
    <section className={style.Blog}>
      <PopupSearch search={search} setSearch={setSearch} />
      <Tags />
      <ListWorksVisible />
      <Hungry blue />
      <TempSeparator />
      <StartSection />
    <Footer />
    </section>
  )
}
export default Blog
