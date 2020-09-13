import React from 'react'

import {withRouter} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

import {connect} from 'react-redux'
import {compose} from 'redux'

import preloader from './../../assets/images/preloader.svg'
import {getPostFullThunk} from './../../redux/reducer.js'

const PostFull = ({post}) => {
    const backgroundStyle = {
        backgroundColor: `${post.imageUrl != null ? post.imageUrl : '#E5E5E5'}`
    }
    return (
        <div style={backgroundStyle} className='post-full'>
            <div className='container'>
                <h1 className='pt-4'>{post.title}</h1>
                <p className='m-0'>{post.text}</p>

                <NavLink to={`/posts`}><button className='btn btn-dark my-2'>back</button></NavLink>
            </div>
        </div>
    )
}

class PostFullContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.postId
        this.props.getPostFullThunk(id)
    }

    render() {
        return <> {this.props.loader 
            ? <img src={preloader} alt=""/>
            : <PostFull post={this.props.post}/>}
        </>
    }
}

let mapStateToProps = (state) => ({
    post: state.reducer.postFull,
    loader: state.reducer.loader
})

export default compose (
    connect(mapStateToProps, {getPostFullThunk}),
    withRouter
)(PostFullContainer)
