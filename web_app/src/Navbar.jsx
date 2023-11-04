import React from 'react'
import { Link } from "react-router-dom";

const Navbar = ({search,setsearch,title}) => {
  return (
      <>
        <nav className="flex justify-between h-16 w-screen">
          <div className="flex h-full w-1/3">
            <h1 className="my-auto ml-5 text-4xl">{title}</h1>
          </div>
          <div className="w-2/3 flex">
            <form onSubmit={(e)=>e.preventDefault} className="my-auto">
              <input 
                className=' rounded-md py-2 px-2 outline-none border-0 text-black'
                type="text"
                value={search}
                placeholder="Search"
                onChange={(e)=>setsearch (e.target.value)}
              />
            </form>
            <ul className=" my-auto flex justify-evenly w-full">
              <li><Link to="Home" className="my-auto hover:text-sky-500 ">Home</Link></li>
              <li><Link to="newpost" className=" my-auto hover:text-sky-500 ">Newpost</Link></li>
              <li><Link to="about" className=" my-auto hover:text-sky-500 ">About</Link></li>
              <li><Link to="postpage" className=" my-auto hover:text-sky-500 ">Postpage</Link></li>
            </ul>
          </div>
      </nav>
    </>
  )
}

export default Navbar