import React from 'react'
const Footer = ({itemslength}) => {
  return (
    <div className=' relative mt-10 bottom-0 bg-slate-950'>
        <p className=' w-screen text-center my-auto  text-2xl'>{itemslength} List {itemslength===1 ?"Item":"Items"}</p>
    </div>
  )
}
export default Footer