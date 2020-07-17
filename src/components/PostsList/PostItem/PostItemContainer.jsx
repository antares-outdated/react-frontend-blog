import React from 'react'
import PostsList from './PostsList'
import {getPostsThunk} from './../../redux/postslist-reducer'
import {connect} from 'react-redux'

class PostsListContainer extends React.Component {
    componentDidMount() {
        this.props.getPostsThunk()
    }

    render() {
        return <PostsList posts={this.props.posts}/>
    }
}
let mapStateToProps = (state) => ({
    posts: state.postsList.items
})


let mapDispatchToProps = (dispatch) => ({
    getPostsThunk: () => {
        dispatch(getPostsThunk())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer)
