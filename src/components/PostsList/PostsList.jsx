import React from 'react'
import { NavLink } from 'react-router-dom'
import './../../App.css'

const PostItem = ({postId, title, text, color}) => {
    const backgroundStyle = {
        backgroundColor: `${color != null ? color : '#E5E5E5'}`
    }
    return (
        <div className='container'>
            <div style={backgroundStyle} className='my-3 p-4 rounded position-relative shadow p-3 rounded'>
                    <div className='main-text'>
                        <NavLink className='stretched-link font-weight-bold text-dark' to={`/posts/${postId}`}><h5>{title}</h5></NavLink>

                        <p className='mb-2 font-weight-light'>{text}</p>
                    </div>
                </div>
            </div>
        )
}

export default function PostsList ({posts}){
    const Post = posts.map(post => 
    <PostItem 
        postId={post._id}
        key={post._id}
        title={post.title}
        color={post.imageUrl}
        text={post.text}/>)

    return  <>{Post}</> 
}