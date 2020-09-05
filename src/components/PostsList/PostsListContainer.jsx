import React from 'react'
import PostsList from './PostsList'
import {getPostsThunk, delPostFullThunk} from '../../redux/reducer'
import {connect} from 'react-redux'

class PostsListContainer extends React.Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return <>
            {/* {this.props.loading ? <img src={preloader}/> : null}  */}
            <PostsList 
            posts={this.props.posts} 
            delPostFull={this.props.delPostFull}/>
        </>
    }
}

let mapStateToProps = (state) => ({
    posts: state.posts,
    loading: state.loading
})

let mapDispatchToProps = (dispatch) => ({
    getPosts: () => {
        dispatch(getPostsThunk())
    },
    delPostFull: (postId) => {
        dispatch(delPostFullThunk(postId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer)
