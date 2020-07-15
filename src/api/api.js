import * as axios from 'axios'

const instanse = axios.create({
    baseURL: 'http://localhost:3333/',
})

export const postsAPI = {
    getPosts() {
        return instanse.get('posts').then(response => {
            return response.data
        })
    }
}