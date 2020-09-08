import React from 'react'
import PostsList from './PostsList'
import { getPostsThunk, delPostFullThunk } from '../../redux/reducer'
import { connect } from 'react-redux'
import preloader from './../../assets/images/5.svg'

class PostsListContainer extends React.Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return <>
            {this.props.loader
                ? <img src={preloader} alt=""/>
                : <PostsList 
                posts={this.props.posts} 
                delPostFull={this.props.delPostFull}/>}
        </>
    }
}

let mapStateToProps = (state) => ({
    posts: state.reducer.posts,
    loader: state.reducer.loader
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
