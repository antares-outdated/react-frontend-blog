import * as axios from 'axios'

const instanse = axios.create({
    baseURL: 'http://localhost:3333/',
})

export const postsAPI = {
    getPosts(postId) {
        return instanse.get(`posts${postId ? '/' + postId : ''}`).then(response => {
            // return data
            return response.data 
        })
    },
    delPost(postId) {
        return instanse.delete(`posts/${postId}`).then(response => {
            // return { status: 'deleted' }
            return response.data 
        })
    },
    addPost(title, text, imageUrl) {
        return instanse.post(`addpost`, {title, text, imageUrl}).then(response => {
            // return the modified data
            return response.data 
        })
    },
    editPost(title, text, imageUrl, postId) {
        return instanse.patch(`edit/${postId}`, {title, text, imageUrl}).then(response => {
            // return the modified data
            return response.data 
        })
    }
}