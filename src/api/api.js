import * as axios from 'axios'

const instanse = axios.create({
    baseURL: 'http://localhost:3333/',
})

export const postsAPI = {
    getPosts(postId) {
        debugger
        return instanse.get(`posts${postId ? '/' + postId : ''}`).then(response => {
            return response.data
        })
    }
}