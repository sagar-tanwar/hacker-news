import React from 'react'

export default function Post({ id, title, author, url, created }) {
  return (
    <div className="post">
      <p className="post-title"><a href={url} >{title}</a></p>
      <p className="post-meta">by <a href="#0">{author}</a> on {created.toLocaleString()} with <a href="#0">0</a> comments</p>
    </div>
  )
}