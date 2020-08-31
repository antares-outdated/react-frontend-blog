import React from 'react'
import PostFull from './PostFull'
import {getPostFullThunk, delPostFullThunk, editPostThunk} from './../../redux/reducer.js'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'

class PostFullContainer extends React.Component {
    componentDidMount() {
        let postId = this.props.match.params.postId
        this.props.getPostFullThunk(postId)
    }

    render() {
        return <PostFull post={this.props.post} loading={this.props.loading} editPostThunk={editPostThunk} delPostFullThunk={delPostFullThunk}/>
    }
}
let mapStateToProps = (state) => ({
    post: state.postFull,
    loading: state.loading
})


let mapDispatchToProps = (dispatch) => ({
    getPostFullThunk: (postId) => {
        dispatch(getPostFullThunk(postId))
    },
    delPostFullThunk: (postId) => {
        dispatch(delPostFullThunk(postId))
    },
    editPostThunk: (postId) => {
        dispatch(editPostThunk(postId))
    }
})
export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(PostFullContainer)
