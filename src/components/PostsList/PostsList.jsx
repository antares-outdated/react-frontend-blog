import React from 'react'
import PostItem from './PostItem/PostItem'
import { NavLink } from 'react-router-dom'

const PostsList = (props) => {
    const PostItemEl = props.posts.map(el => <PostItem 
    postId={el._id}
    key={el._id}
    title={el.title}
    text={el.text}
    createdAt={el.createdAt}
    delPostFull={props.delPostFull}
    />)

    return (
        <div>
            <NavLink to={`addpost`}><button className='btn btn-dark my-4'>create new post</button></NavLink>
            {PostItemEl}
        </div>
    )
}

export default PostsList