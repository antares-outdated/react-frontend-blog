import { addPostThunk } from './../../redux/reducer'
import preloader from './../../assets/images/5.svg'
import { connect } from 'react-redux'
import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import { Field, reduxForm } from 'redux-form'

const AddPostForm = (props) => {

    return <>
        {props.loader
            ? <img src={preloader} alt="" />
            : <form onSubmit={props.handleSubmit}>
                <div className="input-group my-3">
                    <Field className="form-control" placeholder='title' name='title' component='input' />
                    <div className="input-group-append"></div>
                </div>
                <div className="input-group mb-3">
                    <Field className="form-control" placeholder='title' name='img' component='input' />
                    <div className="input-group-append"></div>
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                    </div>
                    <Field className="form-control" placeholder='text' name='text' component='textarea' />
                </div>
                <NavLink to={`/posts`}><button className='btn btn-secondary my-3'>back</button></NavLink>

                <button className='btn btn-primary my-3 ml-2'>add post</button>
            </form>}
    </>
}

const AddPostRedux = reduxForm({
    form: 'addpost-form',
})(AddPostForm)



// Function Component
const AddPost = ({loader, addPost}) => {
    const history = useHistory()

    const onSubmit = (value) => {
        addPost(value.title, value.img, value.text)
        history.push('/posts')

    }

    return <AddPostRedux onSubmit={onSubmit} loader={loader}/>
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