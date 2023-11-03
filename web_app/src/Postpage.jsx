import React from 'react'
import { Link } from 'react-router-dom'
const Postpage = () => {
  return (
    <main>
        <h1 className='text-3xl '>Postpage</h1>
        <ul>
          <li><Link to="/postpage/1">Post 1</Link></li>
          <li><Link to="/postpage/2">Post 2</Link></li>
          <li><Link to="/postpage/3">Post 3</Link></li>
        </ul>
    </main>
  )
}

export default Postpage