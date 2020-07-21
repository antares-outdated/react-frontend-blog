import React from 'react'
import './index.scss'
import PostsListContainer from './components/PostsList/PostsListContainer'
import PostFullContainer from './components/FullPost/PostFullContainer'
import NotFound from './components/NotFound/NotFound'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <div className='App my-lg-4'>
      <div className='container'>
        <Switch>
          <Route path='/posts' exact component={PostsListContainer}/>
          <Route path='/posts/:postId' exact component={PostFullContainer}/>
          <Route path='*' component={NotFound}/>
        </Switch>
        </div>
      </div> 
    </BrowserRouter>
  )
}

export default App
