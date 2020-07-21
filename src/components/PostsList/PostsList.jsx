import React from 'react'
import PostItem from './PostItem/PostItem'

const PostsList = (props) => {
    const PostItemEl = props.posts.map(el => <PostItem 
    postId={el._id} 
    key={el._id} 
    title={el.title} 
    text={el.text}
    createdAt={el.createdAt}
    updatedAt={el.updatedAt}
    />)

    return (
        <div>{PostItemEl}</div>
    )
}

export default PostsList