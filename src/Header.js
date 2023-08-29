import React from 'react'
const Header = (props) => {
  return (
    <div className='w-screen bg-slate-950 flex h-16'>
        <h1 className=' my-auto mx-auto text-3xl font-bold'>{props.title}</h1>
    </div>
  )
}
Header.defaultProps={
  title:"TO DO LIST"
}

  export default Header