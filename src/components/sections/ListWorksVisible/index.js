
import { connect } from 'react-redux';
import fetchPosts from '../../../store/actions/fetchPosts';
import { useLocation } from 'react-router-dom';

import ListWorks from '@sections/ListWorks';

const mapStateToProps = ({ posts, tags }) => ({ posts, tags });

const useQuery = () => {
  if(process.browser) {
    return new URLSearchParams(useLocation().search);
  }
};

let ListWorksVisible = ({ posts, tags, fetchPosts }) => {
  const tagName = useQuery() && useQuery().get('tag');
  let tagId;

  if (tagName && tags && tags[tagName]) {
    tagId = tags[tagName].id;
  }

  React.useEffect(() => {
    fetchPosts(tagId);
  }, [tagId]);

  return <ListWorks posts={posts} />;
};

export default connect(mapStateToProps, { fetchPosts })(ListWorksVisible);
