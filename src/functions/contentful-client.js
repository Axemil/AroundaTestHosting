import { createClient } from "contentful"
import config from "../../config.json"

// Instantiate the app client
const client = createClient({
  space: config.space,
  accessToken: config.accessToken
})

const getAllPosts = (skip = 0, search, tagId) => client.getEntries({
  skip: skip,
  limit: config.limit,
  order: 'sys.createdAt',
  content_type: "blogPost",
  links_to_entry: tagId,
  "fields.title[match]": search,
}).then(r => {console.log(r); return r;})

const getAllPostsInteresting = () => client.getEntries({
  order: '-sys.createdAt',
  content_type: "blogPost",
}).then(r => {console.log(r); return r;})



const getAllPostsByTagId = (tagId, skip, search) =>
  client
    .getEntries({
      skip: skip,
      limit: config.limit,
      order: 'sys.createdAt',
      "fields.title[match]": search,
      content_type: "blogPost",
      links_to_entry: tagId
    })
    .catch((err) => console.log(err))

const getTags = () =>
  client.getEntries({
    content_type: "tag"
  })

const getPostBySlug = (slug) =>
  client.getEntries({
    content_type: "blogPost",
    "fields.slug[match]": slug
  })

const createTag = (tag) => {}

export default {
  getAllPosts,
  getAllPostsInteresting,
  getAllPostsByTagId,
  getPostBySlug,
  getTags
}
;(function test() {
  // getPostBySlug(
  //   "how-an-online-food-ordering-system-can-drive-new-sales-and-improve-your"
  // ).then((data) => console.log(data))
  //  getAllPosts().then(data => console.log(data));
  //getAllPostsByTag('6unYDvJtEbUUp5u4YBic44').then(data => console.log(data));
})()
