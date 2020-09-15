import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'

import {delPostFullThunk} from './../../redux/reducer'

const Header = ({delPostFullThunk, ...props}) => {
	const deletePost = () => {
		delPostFullThunk(props.match.params.postId)
	}
	return (
		<div className={'header'}>
			<div className='container'>
				<div className={'d-flex align-items-center justify-content-between'}>
					<NavLink to={`/posts`}>
						<button className='btn btn-light btn-lg my-4 d-flex align-items-center'>
							<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z" />
							</svg>
							<p className='button-text'>BACK</p>
						</button>
					</NavLink>
					<div className='d-flex'>
						<NavLink to={`/edit/${props.post}`}>
							<button className='btn btn-light btn-lg my-4 d-flex align-items-center'>
								<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z" />
								</svg>
								<p className='button-text'>EDIT</p>
							</button>
						</NavLink>
						<NavLink to='/posts'>
							<button className='btn btn-light btn-lg my-4 ml-2 d-flex align-items-center' onClick={deletePost}>
								<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" /></svg>
								<p className='button-text'>DELETE</p>
							</button>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default compose(
	connect(null, {delPostFullThunk}),
	withRouter
)(Header)