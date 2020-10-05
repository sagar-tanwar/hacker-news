import React from 'react'
import {fetchUser} from '../utils/api'
import Loading from './Loading'
import {format} from 'date-fns'
import Posts from './Posts'
import queryString from 'query-string'

export default class User extends React.Component {
  state ={
    user: null
  }

  componentDidMount() {
    const {id} = queryString.parse(this.props.location.search)
    fetchUser(id)
      .then((user) => {
        this.setState({user})
      })
  }

  render() {
    const {user} = this.state
    if(user === null) return <Loading text='Fetching User' />

    return (
      <div className='container p-5 pt-0'>
        <h1 className='mb-2'>{user.id}</h1>
        <div className='text-light'>joined <b>{format(new Date(user.created * 1000), 'M/d/yyyy, h:m a')}</b> has <b>{user.karma}</b> karma</div>
        <p dangerouslySetInnerHTML={{__html: user.about}} />
        {user.submitted
          ? (
            <React.Fragment>
              <h2>Posts</h2>
              <Posts posts={user.submitted} />
            </React.Fragment>
          )
          : null
        }
      </div>
    )
  }
}