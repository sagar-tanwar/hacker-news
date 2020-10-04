import React from 'react'
import Posts from './Posts'
import { fetchTopStories } from '../utils/api'
import Loading from './Loading'

export default class TopPosts extends React.Component {

  state = {
    posts: false
  }

  componentDidMount() {
    fetchTopStories()
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