import React from 'react'

import {editPostThunk} from './../../redux/reducer'
import {connect} from 'react-redux'

import HeaderAddPost from './../Header/HeaderAddPost'

const EditPost = (props) => {
    const title = React.createRef()
    const img = React.createRef()
    const text = React.createRef()

    // const editPost = () => {
    //     props.EditPostThunk(title.current.value, text.current.value, img.current.value, props.match.params.postId)
    // }

    return <>
    <HeaderAddPost/>
        <div className='container'>
            <div>
                <div className="input-group my-3">
                    <input type="text" className="form-control rounded" ref={title} placeholder="Title Post" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div className="input-group-append"></div>
                </div>
                <div className="input-group">
                    <input type="text" className="form-control rounded" ref={img} placeholder="Color" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div className="input-group-append"></div>
                </div>
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                    </div>
                    <textarea className="form-control rounded" aria-label="With textarea" ref={text} placeholder="Here write the text of the post"></textarea>
                </div>
            </div>
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