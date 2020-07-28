import * as axios from 'axios'

const instanse = axios.create({
    baseURL: 'http://localhost:3333/',
})

export const postsAPI = {
    getPosts(postId) {
        return instanse.get(`posts${postId ? '/' + postId : ''}`).then(response => {
            return response.data
        })
    },
    delPost(postId) {
        return instanse.delete(`posts/${postId}`).then(response => {
            return response.data
        })
    },
    addPost(title, text, imageUrl) {
        return instanse.post(`posts`, {title, text, imageUrl}).then(response => {
            return response.data
        })
    }
}