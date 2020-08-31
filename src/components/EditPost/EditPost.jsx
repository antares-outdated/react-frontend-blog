import React from 'react'
import {NavLink} from 'react-router-dom'

const EditPost = (props) => {
    const title = React.createRef()
    const img = React.createRef()
    const text = React.createRef()

    // const localState = {
    //     title: props.title,
    //     imageUrl: props.imgUrl,
    //     text: props.text
    // }

    const editPost = () => {
        props.EditPostThunk(title.current.value, text.current.value, img.current.value, props.match.params.postId)
    }

    return (
        <div>
            <div className="input-group my-3">
                <input type="text" className="form-control" ref={title} placeholder="title" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div className="input-group-append"></div>
            </div>
            <div className="input-group">
                <input type="text" className="form-control" ref={img} placeholder="img url" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div className="input-group-append"></div>
            </div>
            <div className="input-group my-3">
                <div className="input-group-prepend">
                </div>
                <textarea className="form-control" aria-label="With textarea" ref={text} placeholder="text"></textarea>
            </div>
            <NavLink to='/posts'><button className='btn btn-secondary'>back</button></NavLink>
            <NavLink to='/posts'><button className='btn btn-primary ml-2 '  onClick={editPost}>edit post</button></NavLink>
        </div>
    )
}

export default EditPost