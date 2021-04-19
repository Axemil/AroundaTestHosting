import { connect } from 'react-redux';
import fetchTags from "@/store/actions/fetchTags"
import fetchPosts from '@/store/actions/fetchPosts';
import storeWrapper from '@/store';
import Blog from '@/components/views/Blog';
import config from "../../config.json"


export const getServerSideProps = storeWrapper.getServerSideProps(async (context) => {
    const { query, store } = await context;
    await fetchTags()(store.dispatch);
    
    const { tags } = store.getState();
    const tagName = query['tag'];
    let tagId;
    if (tagName && tags && tags[tagName]) {
      tagId = tags[tagName].id;
    }
    const blogPage = query['page'];
    let blogId = 0;
    if(blogPage){
      blogId = (blogPage - 1) * config.limit;
    }
    const searchQuery = query['search'];
    let searchWord = ""
    if(searchQuery){
      searchWord = searchQuery;
    }
    await fetchPosts(tagId,blogId,searchWord)(store.dispatch);
});


export default connect()(Blog);