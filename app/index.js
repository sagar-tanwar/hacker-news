import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TopPosts from './components/TopPosts'
import NewPosts from './components/NewPosts'
import Post from './components/Post'
import User from './components/User'
import Nav from './components/Nav'
import {ThemeProvider} from './contexts/theme'

class App extends React.Component {
  state = {
    theme: 'dark',
    toggleTheme: () => {
      this.setState(({theme}) => ({
        theme: theme === 'dark' ? 'light' : 'dark'
      }))
    }
  }
  
  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className={this.state.theme}>
          <Nav />
          <Post />
        </div>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
)