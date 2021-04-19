
import { useEffect, useState } from 'react'
import style from "./style.scss"
import StartSection from "@sections/StartSection"
import Tags from "@sections/Tags"
import config from "../../../../config.json"
// import ListWorks from "@sections/ListWorks";
import ListWorksVisible from "@sections/ListWorksVisible"
import Hungry from "@sections/Hungry"
import PopupSearch from "@sections/PopupSearch"
import MetaData from '@simple/MetaData'
import LetsTalk from "@sections/LetsTalk"
import MoreInteresting from "@sections/MoreInteresting"
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'
import fetchPosts from '../../../store/actions/fetchPosts';
import { connect } from 'react-redux';

// const TempSeparator = () => (
//   <div
//     style={{
//       height: "150px",
//       gridColumn: "1 / -1"
//     }}
//   ></div>
// )

const useStyles = makeStyles((theme) =>({
  root: {
      '&': {
        display: 'grid',
        gridColumn: '1 / -1',
        margin: '25px auto 70px',
      },
      '& button': {
        height: '46px',
        minWidth: '46px',
        fontFamily: 'Gordita',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '18px',
        letterSpacing: '0em',
        textAlign: "center",
        borderRadius: "50%",
        background: "none",
        color: "#7F838D",
        margin: '0 4px'
      },
      '& .Mui-selected': {
        backgroundColor: '#30FDDC',
        color:'#000',
       },
  }}),
);


let Blog = ({ posts, tags, isMobile,fetchPosts}) => {
  useEffect(() => {
    if(posts[1]){
      setPagination(posts[1].total);
    }
  })
  useEffect(() => {
    fetchPosts();
  },[])
  
  const classes = useStyles();
  const [pagination, setPagination] = useState(1);
  const [search, setSearch] = useState(false);
  const [page, setPage] = useState(1);
  const router = useRouter()
  const handleChange = (event, value) => {
    setPage(value);
    console.log(router.query);
    if(router.query.tag && router.query.search){
      router.push({
        pathname: '/blog',
        query: { page: value, tag: router.query.tag, search: router.query.search },
      })
    } else if(router.query.tag){
      router.push({
        pathname: '/blog',
        query: { page: value, tag: router.query.tag },
      })
    } else if(router.query.search){
      router.push({
        pathname: '/blog',
        query: { page: value, search: router.query.search },
      })
    } else {
      router.push({
        pathname: '/blog',
        query: { page: value },
      })
    }
  };
  return (
    <section className={style.Blog}>
      <PopupSearch search={search} setSearch={setSearch} />
      <Tags isMobile={isMobile} />
      <ListWorksVisible />
      <Pagination className={classes.root} count={Math.ceil(pagination / 12)} page={page} onChange={handleChange} hidePrevButton hideNextButton />
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
const mapStateToProps = ({ posts, tags }) => ({ posts, tags });
export default connect(mapStateToProps, { fetchPosts })(Blog);
