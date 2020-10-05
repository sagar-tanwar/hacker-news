import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TopPosts from './components/TopPosts'
import NewPosts from './components/NewPosts'
import Post from './components/Post'
import User from './components/User'
import Nav from './components/Nav'
import {ThemeProvider} from './contexts/theme'
import {BrowserRouter as Router, Route} from 'react-router-dom'

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
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <Nav />
            <Route path='/' exact component={TopPosts} />
            <Route path='/new' component={NewPosts} />
            <Route path='/user' component={User} />
            <Route path='/post' component={Post} />
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
)