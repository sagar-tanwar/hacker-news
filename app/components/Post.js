import React from 'react'
import {fetchStory} from '../utils/api'
import Loading from './Loading'
import {format} from 'date-fns'
import Comments from './Comments'

export default class Post extends React.Component {
  state = {
    post: null
  }

  componentDidMount() {
    fetchStory(24659282)
      .then((post) => {
        this.setState({post})
      })
  }

  render() {
    const {post} = this.state

    if(!post) return <Loading text='Fetching Post' />

    return (
      <div className='container p-5 pt-0'>
        <h1 className='mb-2'><a className='link' href={post.url}>{post.title}</a></h1>
        <div className="text-light pb-3">by <a href="#0">{post.by}</a> on {format(new Date(post.time * 1000), 'MM/d/yyyy, h:m a')} with <a href="#0">{post.kids ? post.kids.length : 0}</a> comments</div>
        {post.kids && <Comments comments={post.kids}/>}
      </div>
    )
  }
}