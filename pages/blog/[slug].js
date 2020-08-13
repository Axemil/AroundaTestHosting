import { connect } from 'react-redux';
import fetchPost from '@/store/actions/fetchPost';
import storeWrapper from '@/store';
import BlogPost from '@/components/views/BlogPostConnected';


export const getServerSideProps = storeWrapper.getServerSideProps(async (context) => {
    const { query, store } = context;
    const slug = query.slug
    if(!/\.ico+$/i.test(slug)) {
        await fetchPost(slug)(store.dispatch)
    }
});


export default connect()(BlogPost);