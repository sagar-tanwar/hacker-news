import React from 'react'
import Post from './post'
import { fetchTopStories } from '../utils/api'

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
      <div className="container p-5">
        {posts === false
          ? <div>Loading</div>
          : (
            <ul className='list-unstyled'>
              {posts.map((post) => (
                <li className="mb-3" key={post.id}>
                  <Post 
                    id={post.id}
                    title={post.title}
                    author={post.by} 
                    url={post.url}
                    comments={post.kids ? post.kids.length : 0}
                    created={post.time} />
                </li>
              ))}
            </ul>
          )
        }
      </div>
    )
  }
}