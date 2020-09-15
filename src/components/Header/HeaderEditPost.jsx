import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { submit } from 'redux-form'

const Header = ({ delPostFullThunk, ...props }) => {
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
					<button className='btn btn-light btn-lg my-4 d-flex align-items-center' onClick={() => props.dispatch(submit('editpost-form'))}>
						<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
						</svg>
						<p className='button-text'>EDIT POST</p>
					</button>
				</div>
			</div>
		</div>
	)
}
export default compose(
	connect(),
	withRouter
)(Header)