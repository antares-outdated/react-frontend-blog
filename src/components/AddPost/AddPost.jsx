import {addPostThunk} from './../../redux/reducer'
import {connect} from 'react-redux'

import React from 'react'
import {NavLink} from 'react-router-dom'

const AddPost = (props) => {
    const title = React.createRef()
    const img = React.createRef()
    const text = React.createRef()

    let newPost = () => {
        props.addPostThunk(title.current.value, text.current.value, img.current.value)
    }

    return (
        <div>
            <div className="input-group my-3">
                <input type="text" className="form-control" ref={title} placeholder="title" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div className="input-group-append"></div>
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" ref={img} placeholder="img url" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div className="input-group-append"></div>
            </div>
            <div className="input-group">
                <div className="input-group-prepend">
                </div>
                <textarea className="form-control" aria-label="With textarea" ref={text} placeholder="text"></textarea>
            </div>
            <NavLink to={`/posts`}><button className='btn btn-secondary my-3'>back</button></NavLink>

            <NavLink to='/posts'><button className='btn btn-primary my-3 ml-2' onClick={newPost}>add post</button></NavLink>
        </div>
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostThunk: (title, img, text) => {
            dispatch(addPostThunk(title,img,text))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddPost)