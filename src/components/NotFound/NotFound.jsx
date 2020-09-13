import React from 'react';
import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return <div className='mt-5 text-center'>

            <h1 className='font-weight-light'>Article not found</h1>
            <h3 className='text-danger font-weight-bold'>Error 404</h3>
            <h6 className='main-page'>go back to the
                <NavLink className='text-secondary' to='/posts'> main page</NavLink>
            </h6>

        </div>
}