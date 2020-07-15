import React from 'react'
import PostItem from './../PostItem/PostItem'

const PostsList = (props) => {
    const PostItemEl = props.posts.map(el => <PostItem title={el.title} text={el.text}/>)

    return (
        <div>{PostItemEl}</div>
    )
}

export default PostsList