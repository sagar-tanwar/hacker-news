import React from 'react'
import {format} from 'date-fns'

export default function Post({ id, title, author, url, created, comments }) {
  let datetime = format(new Date(created * 1000), 'MM/d/yyyy, h:m a')

  return (
    <React.Fragment>
      <a className="link" href={url} >{title}</a>
      <p className="text-light">by <a href="#0">{author}</a> on {datetime} with <a href="#0">{comments}</a> comments</p>
    </React.Fragment>
  )
}