import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TopPosts from './components/TopPosts'
import NewPosts from './components/NewPosts'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NewPosts />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
)