import React from 'react'

const PostItem = (props) => {
    return (
        <div>
            <div>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>  
            <br/>
        </div>
    )
}

export default PostItem