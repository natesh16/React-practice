import React from 'react'
const searchitems = ({search,setsearch}) => {
  return (
   <form action="#" onsubmit={(e)=>e.preventDefalut()} >
      <div className='w-screen h-16 flex mt-5 justify-center'>
      <input type="text" className=' my-auto h-16 rounded-xl p-5  w-1/3 m-2 text-white dark:text-black active:outline-blue-700 hover:outline-blue-500 outline-none border- none /' id='search'
      role={searchitems}
      placeholder="search"
      value={search}
      onChange={(e)=>setsearch(e.target.value)}
/>
      </div>
    </form>
    )
}

export default searchitems