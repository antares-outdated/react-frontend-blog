
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// Components
import AddPost from './components/AddPost/AddPost'
// import EditPost from './components/EditPost/EditPost'

import PostsListContainer from './components/PostsList/PostsListContainer'
import PostFull from './components/FullPost/PostFull'

import NotFound from './components/NotFound/NotFound'

export default function App() {
  return <BrowserRouter>
      <div className='d-flex justify-content-center app-wrapper'>
          <div className='app'>
            <Switch>
                <Route path='/posts' exact component={PostsListContainer} />
                <Route path='/posts/:postId' exact component={PostFull} />
                {/* <Route path='/edit/:postId' exact component={EditPost} /> */}
                <Route path='/newpost' exact component={AddPost} />
                  <Route path='*' component={NotFound} />
            </Switch> 
            </div>
        </div>
    </BrowserRouter>
}
