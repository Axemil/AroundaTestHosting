

import { connect } from "react-redux"
import BlogPost from "@pages/BlogPost"
import fetchPost from "@/store/actions/fetchPost"

const mapStateToProps = ({ post }) => ({ post })

const BlogPostConnected = ({ post, fetchPost, match }) => {
  const slug = match.params.id

  React.useEffect(() => {
    console.log("Fetching post")

    fetchPost(slug)
  }, [])

  return <BlogPost post={post} />
}

export default connect(mapStateToProps, { fetchPost })(BlogPostConnected)
