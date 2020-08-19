

import style from "./style.scss"
import StartSection from "@sections/StartSection"
import Tags from "@sections/Tags"
// import ListWorks from "@sections/ListWorks";
import ListWorksVisible from "@sections/ListWorksVisible"
import Hungry from "@sections/Hungry"
import PopupSearch from "@sections/PopupSearch"
import Footer from "@sections/Footer"
import Head from 'next/head';

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
      <h1 className={'h1-seo'}>
        Blog & News
      </h1>
      <Head>
					<title>
            Blog — Useful Articles on Web & Mobile App Design | Arounda
          </title>
					<meta name="description" content="Arounda blog is where you will find newest design stories, insights, latest design trends and useful tips that will help your business grow." />
          <link rel="canonical" href="https://arounda.agency/blog" />
      </Head>
    </section>
  )
}
export default Blog
