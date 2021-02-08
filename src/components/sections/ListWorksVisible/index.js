
import { connect } from 'react-redux';
import fetchPosts from '../../../store/actions/fetchPosts';

import ListWorks from '@sections/ListWorks';

const mapStateToProps = ({ posts, tags }) => ({ posts, tags });


let ListWorksVisible = ({ posts, tags, fetchPosts }) => {
  console.log(posts)
  return <ListWorks posts={posts} />;
};


export default connect(mapStateToProps, { fetchPosts })(ListWorksVisible);