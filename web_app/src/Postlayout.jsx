import React from 'react'
import { Outlet,Link  } from 'react-router-dom'
const Postlayout = () => {
  return (
    <div>
          <ul className='flex flex-col'>
          <Link to="/postpage/1">Post 1</Link>
          <Link to="/postpage/2">Post 2</Link>
          <Link to="/postpage/3">Post 3</Link>
          <Link to="/postpage/Newpost">Newpost</Link>
        <Outlet/>
        </ul>
    </div>
  )
}

export default Postlayout