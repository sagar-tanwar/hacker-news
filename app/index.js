import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello Everyone!</h1>
        <p>How you doin?</p>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
)