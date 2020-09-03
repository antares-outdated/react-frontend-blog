import React from 'react'
import { NavLink } from 'react-router-dom'
import './../../../App.css'

const PostItem = (props) => {
    const delPostFull = () => {
        props.delPostFull(props.postId)
    }

    return (
        <div>
            <div>
                <NavLink className='font-weight-bold' to={`/posts/${props.postId}`}><h3>{props.title}</h3></NavLink>
                
                <p className='mb-2 font-weight-light post-item'>{props.text}</p>

                <NavLink to={`/edit/${props.postId}`}><button className='btn btn-outline-primary btn-sm'>edit</button></NavLink>
                <button onClick={delPostFull} className='btn btn-outline-primary btn-sm ml-2'>delete</button>
            </div> 
            <br/>
        </div>
    )
}

export default PostItem