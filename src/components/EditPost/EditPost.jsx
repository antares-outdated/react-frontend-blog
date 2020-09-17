import React from 'react'

import { editPostThunk } from './../../redux/reducer'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { Redirect, withRouter } from 'react-router-dom'

import HeaderEditPost from './../Header/HeaderEditPost'

const EditPost = (props) => {
    return <>
        <HeaderEditPost onChangePost={props.onChangePost}/>
                <div className='container'>
                    <form>
                        <div className="input-group my-3">
                            <input
                                type="text"
                                className="form-control rounded"
                                placeholder="Title Post"
                                value={props.state.title}
                                onChange={props.onChangeTitle}
                                required />
                        </div>

                        <div className="input-group my-3">
                            <input
                                className="form-control rounded"
                                placeholder='Color'
                                value={props.state.color}
                                onChange={props.onChangeColor}
                                required />
                        </div>

                        <div className="input-group my-3">
                            <textarea
                                className="form-control rounded"
                                rows="5"
                                value={props.state.text}
                                onChange={props.onChangeText}
                                placeholder="Here write the text of the post"
                                required />
                        </div>
                    </form>
                </div>
            </>
}

class EditPostContainer extends React.Component {
    id = this.props.match.params.postId

    state = {
        title: this.props.post.title,
        text: this.props.post.text,
        color: this.props.post.color
    }

    onChangeTitle = (e) => { this.setState({title: e.currentTarget.value}) }
    onChangeText = (e) => { this.setState({text: e.currentTarget.value}) }
    onChangeColor = (e) => { this.setState({color: e.currentTarget.value}) }

    onChangePost = () => {
        this.props.editPost(this.state.title, this.state.text, this.state.color, this.id)
        this.props.history.push('/posts')
    }

    

    render() {
        return <>
            {this.props.post.length !== 0 ? <EditPost props={this.props} state={this.state}/> : <Redirect to='/posts'/>}
            
        </>
    }
}
const mapDispatchToProps = (dispatch) => ({
    editPost: (title, text, color, id) => {
        dispatch(editPostThunk(title, text, color, id))
    },
})

const mapStateToProps = (state) => ({
    post: state.reducer.postFull,
    loader: state.reducer.loader
})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(EditPostContainer)
