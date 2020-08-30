import React from 'react'
import { NavLink } from 'react-router-dom'
import {delPostFullThunk} from './../../../redux/reducer'

const PostItem = (props) => {
    return (
        <div>
            <div>
                <NavLink className='font-weight-bold' to={`/posts/${props.postId}`}><h3>{props.title}</h3></NavLink>
                <p className='mb-2 font-weight-light'>{props.text}</p>

                <NavLink to={`/edit/${props.postId}`}><a href='' className='btn btn-outline-primary btn-sm'>edit</a></NavLink>
                <a href='' onClick={delPostFullThunk(props.postId)} className='btn btn-outline-primary btn-sm ml-2'>delete</a>
            </div> 
            <br/>
        </div>
    )
}

export default PostItem