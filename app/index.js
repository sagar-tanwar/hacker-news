import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Nav from './components/Nav'
import Loading from './components/Loading'
import {ThemeProvider} from './contexts/theme'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const MainPosts = React.lazy(() => import('./components/MainPosts'))
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
              <Switch>
                <Route path='/' exact render={() => <MainPosts type='top' />} />
                <Route path='/new' render={() => <MainPosts type='new' />} />
                <Route path='/user' component={User} />
                <Route path='/post' component={Post} />
                <Route render={() => <h1 className='container'>404</h1>} />
              </Switch>
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