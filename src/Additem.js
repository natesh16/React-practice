import React from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { useRef } from 'react';

const Additem = ({newitems,setnewitems,handelsubmit}) => {
  const inputref= useRef()
  return (
    <form action="#" onSubmit={handelsubmit}>
      <div className='w-screen h-16 flex mt-5 justify-center'>
          <input className=' my-auto h-full rounded-xl p-5  w-1/4  m-2 text-white dark:text-black active:outline-blue-700 hover:outline-blue-500 outline-none border-none ' 
              autoComplete='OFF' value={newitems}
              ref={inputref}
              onChange={(e)=>setnewitems(e.target.value)}
              autoFocus id='Additem' 
              type="text" 
              placeholder='Add Items'/>
        <button onClick={()=>{
          inputref.current.focus()}
          } className=' my-auto flex text-7xl text-black dark:text-white'>
          <IoIosAddCircle className='hover:text-green-400 mb-4'/>
        
        </button>
      </div>
    </form>
  )
}
export default Additem