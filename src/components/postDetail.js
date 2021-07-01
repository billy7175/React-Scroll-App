import React from 'react'
import { Link } from 'react-router-dom';

export default function postDetail() {
  const dummy = {
    title:'this is a dummy title',
    content:'this is a dummy content'
  }
  return (
    <div>
      <div>
        <h1>{dummy.title}</h1>
        <p>{dummy.content}</p>
      </div>
      <Link to="/" />
    </div>
  )
}
