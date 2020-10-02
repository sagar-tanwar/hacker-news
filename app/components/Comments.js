import React from 'react'
import {format} from 'date-fns'
import PropTypes from 'prop-types'

export default function Comments({comments}) {
  return (
    <ul className='list-unstyled'>
      {comments.map((comment) => (
        <li className="mb-2 p-2 bg-light rounded" key={comment.id}>
          <p className="text-light pb-3">by <a href="#0">{comment.by}</a> on {format(new Date(comment.time * 1000), 'MM/d/yyyy, h:m a')}</p>
          <div dangerouslySetInnerHTML={{__html: comment.text}} />
        </li>
      ))}
    </ul>
  )
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
}