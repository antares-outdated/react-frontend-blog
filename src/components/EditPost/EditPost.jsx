import React from 'react'

import { editPostThunk } from './../../redux/reducer'
import { connect } from 'react-redux'
import {compose} from 'redux'

import { Field, reduxForm } from 'redux-form'

import {useHistory, withRouter} from 'react-router-dom'

import HeaderEditPost from './../Header/HeaderEditPost'

const EditPostForm = (props) => {
    return <>
        <HeaderEditPost />
        <div className='container'>
            <div>
                <div className="input-group my-3">
                    <Field type="text" className="form-control rounded" placeholder="Title Post"
                    name='title' component='input' aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append"></div>
                </div>
                <div className="input-group my-3">
                    <Field className="form-control rounded" placeholder='Color' name='bg' component='input' />
                    <div className="input-group-append"></div>
                </div>
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                    </div>
                    <Field className="form-control rounded" aria-label="With textarea" 
                    rows="5" name='text' component='textarea' placeholder="Here write the text of the post"></Field>
                </div>
            </div>
        </div>
    </>
}

const EditPostRedux = reduxForm({
    form: 'editpost-form'
})(EditPostForm)

const EditPost = ({editPost, ...props}) => {
    const history = useHistory()
    const id = props.match.params.postId

    //EditPostRedux
    const onSubmit = (value) => {
        editPost(value.title, value.text, value.bg, id)
        history.push('/posts')
    }

    return <EditPostRedux onSubmit={onSubmit}/>
}

let mapDispatchToProps = (dispatch) => ({
    editPost: (title, text, color, id) => {
        dispatch(editPostThunk(title, text, color, id))
    }
})

let mapStateToProps = (state) => ({
    loader: state.loader
})

export default compose (
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(EditPost)