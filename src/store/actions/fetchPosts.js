import addPosts from "./addPosts"
import client from "../../functions/contentful-client"
import { composeDate } from "../../functions/lib"

const fetchPosts = (tagId, skip, searchWord) => (dispatch) => {
  let p

  // if (tagId) {
  //   p = client.getAllPostsByTagId(tagId)
  //   return p.then((res) => {
  //     const posts = transformResponse(res)
  //     dispatch(addPosts(posts))
  //   })
  // }
  if (skip != undefined) {
    p = client.getAllPosts(skip, searchWord, tagId)
    return p.then((res) => {
      const posts = transformResponse(res)
      dispatch(addPosts(posts))
    })
  }
}

const transformResponse = (res) => {
  return res.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    slug: item.fields.slug,
    tag: item.fields.tags[0].fields.tag,
    tags: item.fields.tags.map((t) => t.fields.tag),
    date: composeDate(item.fields.date),
    imageUrl: item.fields.image.fields.file.url,
    author: item.fields.author.fields.name,
    authorImage: item.fields.author.fields.image.fields.file.url,
    total: res.total
  }))
}

export default fetchPosts
