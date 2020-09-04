import { connect } from 'react-redux';
import fetchPosts from '@/store/actions/fetchPosts';
import storeWrapper from '@/store';
import Main from '@/components/views/Main';


export const getServerSideProps = storeWrapper.getServerSideProps(async ({store}) => {
    await fetchPosts()(store.dispatch);
});


export default connect()(Main);