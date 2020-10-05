import React from 'react'
import {format} from 'date-fns'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Posts({posts}) {
  return (
    <ul className='list-unstyled'>
      {posts.map((post) => (
        <li className="mb-3" key={post.id}>
          <a className="link" href={post.url ? post.url : post.id} >{post.title}</a>
          <div className="text-light pt-1">by <Link to={`/user?id=${post.by}`}>{post.by}</Link> on {format(new Date(post.time * 1000), 'MM/d/yyyy, h:m a')} with <Link to={`/post?id=${post.id}`}>{post.kids ? post.kids.length : 0}</Link> comments</div>
        </li>
      ))}
    </ul>
  )
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}