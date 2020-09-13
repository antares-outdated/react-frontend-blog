import React from 'react'
import {NavLink} from 'react-router-dom'

import {editPostThunk} from './../../redux/reducer'
import {connect} from 'react-redux'

const EditPost = (props) => {
    const title = React.createRef()
    const img = React.createRef()
    const text = React.createRef()

    const editPost = () => {
        props.EditPostThunk(title.current.value, text.current.value, img.current.value, props.match.params.postId)
    }

    return <>
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
    </>
}

let mapDispatchToProps = (dispatch) => ({
    EditPostThunk: (title, text, img, id) => {
        dispatch(editPostThunk(title, text, img, id))
    }
})

let mapStateToProps = (state) => ({
loader: state.loader
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)