
import { connect } from 'react-redux';
import fetchPosts from '../../../store/actions/fetchPosts';
import { useRouter } from 'next/router'
import useWatch from '@/functions/useWatch';

import ListWorks from '@sections/ListWorks';

const mapStateToProps = ({ posts, tags }) => ({ posts, tags });


let ListWorksVisible = ({ posts, tags, fetchPosts }) => {
  // const { query } = useRouter()
  // const tagName = query && query.tag;
  // let tagId;

  // if (tagName && tags && tags[tagName]) {
  //   tagId = tags[tagName].id;
  // }

  // useWatch(() => {
  //   fetchPosts(tagId);
  //   console.log('a')
  // }, [tagName]);

  return <ListWorks posts={posts} />;
};


export default connect(mapStateToProps, { fetchPosts })(ListWorksVisible);