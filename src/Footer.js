import React from 'react'
const Footer = ({itemslength}) => {
  return (
    <div className=' bg-slate-950 flex h-12  absolute bottom-0'>
        <p className=' w-screen text-center my-auto  text-2xl'>{itemslength} List {itemslength===1 ?"Item":"Items"}</p>
    </div>
  )
}
export default Footer