import React from 'react'
import {NavLink} from 'react-router-dom'

const PostFull = (props) => {
    return (
        <div>
            <h1 className='my-4'>{props.post.title}</h1>
            <p className='m-0'>{props.post.text}</p>
            <img src={props.post.imageUrl} width='100%' alt=''/>

            <NavLink to={`/`}><button className='btn btn-secondary my-3'>back</button></NavLink>
        </div>
    )
}

export default PostFull