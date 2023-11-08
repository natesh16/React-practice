import React from 'react'
import { Link  } from 'react-router-dom'
const Postlayout = () => {
  return (
    <div>
          <ul className='flex flex-col text-black'>
          <Link to="/postpage/1">Post 1</Link>
          <Link to="/postpage/2">Post 2</Link>
          <Link to="/postpage/3">Post 3</Link>
          <Link to="/postpage/Newpost">Newpost</Link>
        </ul>
    </div>
  )
}

export default Postlayout