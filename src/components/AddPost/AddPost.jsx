import { addPostThunk } from './../../redux/reducer'
import preloader from './../../assets/images/5.svg'
import { connect } from 'react-redux'

import React from 'react'
import { NavLink } from 'react-router-dom'

const AddPost = (props) => {
    const title = React.createRef()
    const img = React.createRef()
    const text = React.createRef()

    let newPost = () => {
        props.addPostThunk(title.current.value, text.current.value, img.current.value)
    }

    return <>
        {props.loader
            ? <img src={preloader} alt="" />
            : <div>
                <div className="input-group my-3">
                    <input type="text" className="form-control" ref={title} placeholder="title" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append"></div>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" ref={img} placeholder="img url" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append"></div>
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                    </div>
                    <textarea className="form-control" aria-label="With textarea" ref={text} placeholder="text"></textarea>
                </div>
                <NavLink to={`/posts`}><button className='btn btn-secondary my-3'>back</button></NavLink>

                <NavLink to='/posts'><button className='btn btn-primary my-3 ml-2' onClick={newPost}>add post</button></NavLink>
            </div>}
    </>
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPostThunk: (title, img, text) => {
            dispatch(addPostThunk(title, img, text))
        }
    }
}

const mapStateToProps = (state) => ({
    loader: state.loader
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)