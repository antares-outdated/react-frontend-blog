import React from 'react'
import PostFull from './PostFull'
import {getPostFullThunk, delPostFullThunk} from './../../redux/reducer.js'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'

class PostFullContainer extends React.Component {
    componentDidMount() {
        debugger
        let postId = this.props.match.params.postId
        this.props.getPostFullThunk(postId)
    }

    render() {
        return <PostFull post={this.props.post} delPostFullThunk={delPostFullThunk}/>
    }
}
let mapStateToProps = (state) => ({
    post: state.reducer.postFull
})


let mapDispatchToProps = (dispatch) => ({
    getPostFullThunk: (postId) => {
        dispatch(getPostFullThunk(postId))
    },
    delPostFullThunk: (postId) => {
        dispatch(delPostFullThunk(postId))
    }
})
export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(PostFullContainer)
