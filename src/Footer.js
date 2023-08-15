import React from 'react'

const Footer = () => {
const year=new Date();

  return (
    <div className='bg-violet-700 flex h-12  absolute bottom-0'>
        <p className=' w-screen text-center my-auto '>Copyright &copy {year.getFullYear()} </p>
    </div>
  )
}

export default Footer