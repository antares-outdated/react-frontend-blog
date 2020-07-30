import React from 'react'
import './index.scss'
import PostsListContainer from './components/PostsList/PostsListContainer'
import PostFullContainer from './components/FullPost/PostFullContainer'
import NotFound from './components/NotFound/NotFound'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddPostContainer from './components/AddPost/AddPostContainer'
import EditPostContainer from './components/EditPost/EditPostContainer'

function App() {
  return (
    <BrowserRouter>
      <div className='app my-lg-4'>
      <div className='container'>
        <Switch>
          <Route path='/posts' exact component={PostsListContainer}/>
          <Route path='/posts/:postId' exact component={PostFullContainer}/>
          <Route path='/edit/:postId' exact component={EditPostContainer}/>
          <Route path='/addpost' exact component={AddPostContainer}/>

          <Route path='*' component={NotFound}/>
        </Switch>
        </div>
      </div> 
    </BrowserRouter>
  )
}

export default App
