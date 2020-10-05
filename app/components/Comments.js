import React from 'react'
import {format} from 'date-fns'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Comments({comments}) {
  return (
    <ul className='list-unstyled'>
      {comments.map((comment) => (
        <li className="mb-2 p-2 bg-light rounded" key={comment.id}>
          <div className="text-light pb-3">by <Link to={`/user?id=${comment.by}`}>{comment.by}</Link> on {format(new Date(comment.time * 1000), 'MM/d/yyyy, h:m a')}</div>
          <div dangerouslySetInnerHTML={{__html: comment.text}} />
        </li>
      ))}
    </ul>
  )
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
}