import React from 'react'
import {connect} from 'react-redux'

const Header = ({post}) => {
    return (
        <div className={'header'}>
            <img className={'header-images'} src={'https://www.meme-arsenal.com/memes/87e1930fae8215ce9028a1f7f5df2f6f.jpg'}/>
            <div className={'header-text'}>
                <h2>Blog of Maria Berestova</h2>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    post: state.postFull
})

export default connect(mapStateToProps, null)(Header)
