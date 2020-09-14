import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return <div className={'header'}>
    <div className='container'>
            <div className={'d-flex align-items-center justify-content-between header-inner'}>
                    <div className={'header-text text-light'}>
                        <h3 className='m-0'>BLOG OF</h3>
                        <h5 className='font-weight-bold m-0'>Maria Berestovaya</h5>
                    </div>

                    <NavLink to={`/newpost`}>
                        <button className='btn btn-light btn-lg my-4 ml-2 d-flex align-items-center'>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>  
                            <p className='button-text'>ADD POST</p>
                        </button>
                </NavLink>
            </div>
            </div>
        </div>
}