import React from 'react'
import Posts from './Posts'
import { fetchMainStories } from '../utils/api'
import Loading from './Loading'

export default class MainPosts extends React.Component {

  state = {
    posts: null,
    loading: true,
    error: null
  }

  handleFetch = () => {
    this.setState({
      posts: null,
      loading: true,
      error: null
    })
    fetchMainStories(this.props.type)
      .then((posts) => {
        this.setState({
          posts,
          loading: false
        })
      })
      .catch(({message}) => {
        this.setState({
          error: message,
          loading: false
        })
      })
  }

  componentDidMount() {
    this.handleFetch()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.type !== this.props.type) this.handleFetch()
  }

  render() {
    
    const {posts, loading, error} = this.state

    if(loading) return <Loading />
    
    if(error) return <p className="text-center">{error}</p>

    return (
      <div className="container p-5 pt-0">
        <Posts posts={posts} />
      </div>
    )
  }
}