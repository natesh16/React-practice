import React from 'react'
import { IoIosAddCircle } from "react-icons/io";

const Additem = ({newitems,setnewitems,handelsubmit}) => {
  return (
    <form action="#">
        <div className='-screen h-16 flex mt-5 justify-center'>
             <input className=' my-auto h-full rounded-xl p-5  w-1/4  m-2 text-white dark:text-black active:outline-blue-700 hover:outline-blue-500 outline-none border-none ' 
             autocomplete="off" 
             value={newitems}
             onChange={(Text)=>setnewitems(Text.target.value)}
             autoFocus
             id='Additem' required type="text" placeholder='Add Items'/>
        <button className=' my-auto flex text-7xl text-black dark:text-white'><IoIosAddCircle
        className='hover:text-green-400 mb-4'
        /></button>
        </div>
    </form>
  )
}

export default Additem