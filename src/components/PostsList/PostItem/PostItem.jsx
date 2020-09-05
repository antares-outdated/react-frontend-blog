import React from 'react'
import { NavLink } from 'react-router-dom'
import './../../../App.css'

const PostItem = ({postId, delPostFull, title, text, createdAt}) => {
    const delPost = () => {
        delPostFull(postId)
    }

    return (
        <div>
            <div>
                <NavLink className='font-weight-bold text-dark ' to={`/posts/${postId}`}><h3>{title}</h3></NavLink>
                <p className='mb-2 font-weight-light'>{text}</p>
                
                <p className='m-0'>Posted on <i>{createdAt}</i></p>

                <NavLink to={`/edit/${postId}`} className='text-dark font-italic m-0'>edit</NavLink>
                <a onClick={delPost} className='text-dark cursor-pointer font-italic ml-2'>delete</a>
            </div>
            <br/>
        </div>
    )
}

export default PostItem