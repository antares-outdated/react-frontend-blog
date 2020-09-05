import React from 'react'
import {NavLink} from 'react-router-dom'

const PostFull = (props) => {
    return (
        <div>
            <h1 className='mt-4'>{props.post.title}</h1>
            <p className='m-0'>{props.post.text}</p>

            <NavLink to={`/posts`}><button className='btn btn-dark my-2'>back</button></NavLink>
        </div>
    )
}

export default PostFull