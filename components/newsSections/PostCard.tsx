import React from 'react'

export function PostCardBig({ title, summary, date, image }) {
  return (
    <div className="w-8/12 bg-blue-500 flex">
      <div className="w-1/3 bg-blue-300">Image</div>
      <div>
        <p>{date}</p>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </div>
  )
}
