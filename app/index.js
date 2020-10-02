import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TopPosts from './components/TopPosts'
import NewPosts from './components/NewPosts'
import Post from './components/Post'
import User from './components/User'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <User />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
)