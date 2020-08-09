

import { connect } from "react-redux"
import BlogPost from "@/components/views/BlogPost"
import fetchPost from "@/store/actions/fetchPost"
import { useRouter } from 'next/router'

const mapStateToProps = ({ post }) => ({ post })

const BlogPostConnected = ({ post }) => {
  // const router = useRouter()
  // const slug = router.query.id
  // React.useEffect(() => {
  //   console.log("Fetching post")

  //   fetchPost(slug)
  // }, [])

  return <BlogPost post={post} />
}

export default connect(mapStateToProps)(BlogPostConnected)
