import client from "../../functions/contentful-client"
import addPost from "./addPost"
import { composeDate } from "../../functions/lib"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const fetchPost = (slug) => (dispatch) => {
  return client.getPostBySlug(slug).then((res) => {
    const post = transformResponse(res)
    dispatch(addPost(post))
  })
}

const transformResponse = (res) => {
  const id = res.items[0].sys.id
  const { title, content, date, category = '', tags } = res.items[0].fields
  console.log('Поля: ', res.items[0].fields)
  const imageUrl = `https:${res.items[0].fields.image.fields.file.url}`

  let author = res.items[0].fields.author
  author = {
    name: author.fields.name,
    description: author.fields.description,
    imgUrl: `https:${author.fields.image.fields.file.url}`
  }

  return {
    id,
    title,
    date: composeDate(date),
    category,
    author,
    imageUrl,
    tags,
    content: content
  }
}

export default fetchPost
