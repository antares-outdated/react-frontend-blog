import React from 'react'
import './index.scss'
import PostsListContainer from './components/PostsList/PostsListContainer'
import {BrowserRouter, Route} from 'react-router-dom'
import PostFullContainer from './components/FullPost/PostFullContainer'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/posts' render={() => <PostsListContainer/>}/>
        <Route path='/posts/:postId' render={() => <PostFullContainer/>}/>
      </div> 
    </BrowserRouter>
  )
}

export default App
