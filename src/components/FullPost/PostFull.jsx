import React from 'react'

const PostFull = (props) => {
    return (
        <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.text}</p>
            {/* <p>{props.post.createdAt}</p> */}
            <button className='btn btn-primary mb-4' onClick={props.delPostFullThunk(props.post._id) }>delete</button>
        </div>
    )
}

export default PostFull