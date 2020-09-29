import React from 'react'
import Post from './post'
import { getTopPosts } from '../utils/api'

export default class TopPosts extends React.Component {

  state = {
    posts: false
  }

  componentDidMount() {
    getTopPosts()
    .then((posts) => {
      this.setState({posts})
    })
  }

  render() {
    return (
      <div className="container">
        {this.state.posts === false
          ? <div>Loading</div>
          : JSON.stringify(this.state.posts, null, 2)
        }
      </div>
    )
  }
}

{/* <ul>
            {posts.map((post) => {
              <li key={post.id}>
                <Post 
                  id={post.id}
                  title={post.title}
                  author={post.by} 
                  url={post.url}
                  created={post.time} />
              </li>
            })}
          </ul> */}