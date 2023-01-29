import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Reprehenderit non veniam dolor sint et enim minim.Labore consequat irure laborum qui nisi cupidatat.Ut esse velit est Lorem est officia nulla officia nulla.Occaecat dolore ut non id est voluptate nisi cillum aute fugiat labore do.</p>

        <p>Go to the <Link to="/">Home page</Link></p>
    </div>
  )
}
