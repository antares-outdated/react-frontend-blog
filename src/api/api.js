import * as axios from 'axios'

const instanse = axios.create({
    baseURL: 'http://localhost:3333/',
})

export const postsAPI = {
    getPosts(postId) {
        return instanse.get(`posts${postId ? '/' + postId : ''}`).then(response => {
            return response
        })
    },
    delPost(postId) {
        return instanse.delete(`posts/${postId}`).then(response => {
            return response
        })
    },
    addPost(title, text, color) {
        return instanse.post(`newpost`, { title, text, color }).then(response => {
            return response
        })
    },
    editPost(title, text, color, postId) {
        return instanse.patch(`edit/${postId}`, { title, text, color }).then(response => {
            return response
        })
    }
}