import React from 'react'
import { NavLink } from 'react-router-dom'

const PostItem = (props) => {
    return (
        <div>
            <div>
                <NavLink to={`/posts/${props.postId}`}>{props.title}</NavLink>
                <p>{props.text}</p>
            </div>  
            <br/>
        </div>
    )
}

export default PostItem