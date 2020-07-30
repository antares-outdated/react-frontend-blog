import React from 'react'
import {NavLink} from 'react-router-dom'

const PostFull = (props) => {
    return (
        <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.text}</p>
            <NavLink to={`/edit/${props.post._id}`}><button className='btn btn-primary mt-2'>edit</button></NavLink>
            <button className='btn btn-primary mt-2 ml-4' onClick={props.delPostFullThunk(props.post._id) }>delete</button>
        </div>
    )
}

export default PostFull