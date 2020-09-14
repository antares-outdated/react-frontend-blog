import { addPostThunk } from './../../redux/reducer'
import { connect } from 'react-redux'
import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import { Field, reduxForm } from 'redux-form'
import HeaderAddPost from './../Header/HeaderAddPost'

const AddPostForm = (props) => {

    return <>
        <HeaderAddPost />
        <div className='container'>
            <form onSubmit={props.handleSubmit}>
                <div className="input-group my-3">
                    <Field className="form-control" placeholder='title' name='title' component='input' />
                    <div className="input-group-append"></div>
                </div>
                <div className="input-group mb-3">
                    <Field className="form-control" placeholder='color' name='color' component='input' />
                    <div className="input-group-append"></div>
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                    </div>
                    <Field className="form-control" placeholder='text' name='text' component='textarea' />
                </div>
            </form>
        </div>
    </>
}

const AddPostRedux = reduxForm({
    form: 'addpost-form',
})(AddPostForm)



// Function Component
const AddPost = ({ loader, addPost }) => {
    const history = useHistory()

    const onSubmit = (value) => {
        addPost(value.title, value.color, value.text)
        history.push('/posts')

    }

    return <AddPostRedux onSubmit={onSubmit} loader={loader} />
}

// Container Component
const mapStateToProps = (state) => ({
    loader: state.loader
})

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (title, img, text) => {
            dispatch(addPostThunk(title, img, text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)