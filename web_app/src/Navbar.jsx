import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <>
        <nav className="flex justify-between h-16 w-screen">
          <div className="flex h-full w-1/3">
            <h1 className="my-auto ml-5 text-4xl">LOGO</h1>
          </div>
          <div className="w-1/2 flex">
            <ul className=" my-auto flex justify-evenly w-full">
              <li><Link to="Home" className="my-auto ">Home</Link></li>
              <li><Link to="newpost" className=" my-auto ">Newpost</Link></li>
              <li><Link to="about" className=" my-auto ">About</Link></li>
              <li><Link to="postpage" className=" my-auto ">Postpage</Link></li>
            </ul>
          </div>
      </nav>
    </>
  )
}

export default Navbar