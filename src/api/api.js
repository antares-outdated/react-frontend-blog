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
            debugger
            return response
        })
    },
    editPost(title, text, imageUrl, postId) {
        return instanse.patch(`edit/${postId}`, { title, text, imageUrl }).then(response => {
            return response
        })
    }
}