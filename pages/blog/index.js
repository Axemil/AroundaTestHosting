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
    await fetchPosts(tagId)(store.dispatch);
});


export default connect()(Blog);