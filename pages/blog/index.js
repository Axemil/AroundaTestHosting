import { connect } from 'react-redux';
import fetchTags from "@/store/actions/fetchTags"
import fetchPosts from '@/store/actions/fetchPosts';
import storeWrapper from '@/store';
import Blog from '@/components/views/Blog';


export const getServerSideProps = storeWrapper.getServerSideProps(async (context) => {
    const { query, store } = context;
    await fetchTags()(store.dispatch);
    
    const { tags } = store.getState();
    const tagName = query['tag'];
    let tagId;
    if (tagName && tags && tags[tagName]) {
      tagId = tags[tagName].id;
    }
    const blogPage = query['page'];
    let blogId;
    if(blogPage){
      blogId = (blogPage - 1) * 2;
    }
    else{
      blogId = 0;
    }
    await fetchPosts(tagId,blogId)(store.dispatch);
});


export default connect()(Blog);