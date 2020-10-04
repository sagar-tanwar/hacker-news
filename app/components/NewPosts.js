import React from 'react'
import Posts from './Posts'
import { fetchNewStories } from '../utils/api'
import Loading from './Loading'

export default class NewPosts extends React.Component {

  state = {
    posts: false
  }

  componentDidMount() {
    fetchNewStories()
      .then((posts) => {
        this.setState({posts})
      })
  }

  render() {
    
    const {posts} = this.state

    return (
      <div className="container p-5 pt-0">
        {posts === false
          ? <Loading />
          : <Posts posts={posts} />
        }
      </div>
    )
  }
}