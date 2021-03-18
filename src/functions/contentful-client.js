import { createClient } from "contentful"
import config from "../../config.json"

// Instantiate the app client
const client = createClient({
  space: config.space,
  accessToken: config.accessToken
})

const getAllPosts = (skip) => client.getEntries({
  skip: skip,
  limit: 2,
  order: 'sys.createdAt',
  content_type: "blogPost",
}).then(r => {console.log(r); return r;})



const getAllPostsByTagId = (tagId) =>
  client
    .getEntries({
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
