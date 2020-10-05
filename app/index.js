import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Nav from './components/Nav'
import Loading from './components/Loading'
import {ThemeProvider} from './contexts/theme'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const TopPosts = React.lazy(() => import('./components/TopPosts'))
const NewPosts = React.lazy(() => import('./components/NewPosts'))
const User = React.lazy(() => import('./components/User'))
const Post = React.lazy(() => import('./components/Post'))

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
            <React.Suspense fallback={<Loading />}>
              <Route path='/' exact component={TopPosts} />
              <Route path='/new' component={NewPosts} />
              <Route path='/user' component={User} />
              <Route path='/post' component={Post} />
            </React.Suspense>
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