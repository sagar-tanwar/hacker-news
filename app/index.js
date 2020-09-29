import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TopPosts from './components/TopPosts'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TopPosts />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
)