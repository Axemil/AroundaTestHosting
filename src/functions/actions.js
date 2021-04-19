import client from './contentful-client'
import { composeDate } from './lib'

/**
 *  Action creators 
 */
export const ADD_TAGS = 'ADD_TAGS'
const addTags = tags => ({
    type: ADD_TAGS,
    payload: tags
})

export const ADD_POSTS = 'ADD_POSTS'
const addPosts = posts => ({
    type: ADD_POSTS,
    payload: posts
})

export const ADD_POSTS_INTER = 'ADD_POSTS_INTER'
const addPostsInter = posts => ({
    type: ADD_POSTS_INTER,
    payload: posts
})



/**
 *  Normalizers
 */
const normalizeTags = res => {
    return res.items.map(item => {
        const id = item.sys.id
        const value = item.fields.tag
        return {id, value}
    })
}

const normalizePosts = res => {
    let posts = [];

    posts = res.items.map(item => ({
        id: item.sys.id,
        title: item.fields.title,
        slug: item.fields.slug,
        tag: item.fields.category,
        date: composeDate(item.fields.date),
        imageUrl: item.fields.image.fields.file.url,
        author: item.fields.author.fields.name
    }))
    return posts;
}


/**
 *  Thunks
 */
export const fetchTags = () => dispatch => {
    client.getTags().then(res => {
        dispatch(addTags(normalizeTags(res)))
    } )
}

export const fetchPosts= () => dispatch => {
    client.getAllPosts().then(res => {
        dispatch(addPosts(normalizePosts(res)))
    } )
}

export const fetchPostsInteresting= () => dispatch => {
    client.getAllPostsInteresting().then(res => {
        dispatch(addPostsInter(normalizePosts(res)))
    } )
}


