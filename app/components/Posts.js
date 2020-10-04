import React from 'react'
import {format} from 'date-fns'
import PropTypes from 'prop-types'

export default function Posts({posts}) {
  return (
    <ul className='list-unstyled'>
      {posts.map((post) => (
        <li className="mb-3" key={post.id}>
          <a className="link" href={post.url ? post.url : post.id} >{post.title}</a>
          <div className="text-light pt-1">by <a href="#0">{post.by}</a> on {format(new Date(post.time * 1000), 'MM/d/yyyy, h:m a')} with <a href="#0">{post.kids ? post.kids.length : 0}</a> comments</div>
        </li>
      ))}
    </ul>
  )
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}