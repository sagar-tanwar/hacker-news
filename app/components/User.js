import React from 'react'
import {fetchUser} from '../utils/api'
import Loading from './Loading'
import {format} from 'date-fns'
import Posts from './Posts'

export default class User extends React.Component {
  state ={
    user: null
  }

  componentDidMount() {
    fetchUser('krimeo')
      .then((user) => {
        this.setState({user})
      })
  }

  render() {
    const {user} = this.state
    if(user === null) return <Loading text='Fetching User' />

    return (
      <div className='container p-5'>
        <h1>{user.id}</h1>
        <p className='text-light pb-3'>joined <b>{format(new Date(user.created * 1000), 'M/d/yyyy, h:m a')}</b> has <b>{user.karma}</b> karma</p>
        {user.submitted
          ? (
            <React.Fragment>
              <h2 className='pb-3'>Posts</h2>
              <Posts posts={user.submitted} />
            </React.Fragment>
          )
          : null
        }
      </div>
    )
  }
}