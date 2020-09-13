import React from 'react'
import { connect } from 'react-redux'

import PostsList from './PostsList'
import { getPostsThunk } from '../../redux/reducer'

import preloader from './../../assets/images/preloader.svg'

class PostsListContainer extends React.Component {
    componentDidMount() {
        this.props.getPostsThunk()
    }

    render() {
        return <>
            {this.props.loader
                ? <img src={preloader} alt=""/>
                : <PostsList 
                posts={this.props.posts}/>}
        </>
    }
}

let mapStateToProps = (state) => ({
    posts: state.reducer.posts,
    loader: state.reducer.loader
})

export default connect(mapStateToProps, {getPostsThunk})(PostsListContainer)
