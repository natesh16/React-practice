import React from 'react'
import { FaTrashRestore } from "react-icons/fa";

const Lineitems = ({item,handelDelect,handleCheck}) => {
  return (
    <div className=' w-full mt-5'>
    <li className=' text-center my-auto justify-center mx-28 flex h-20 text-white'>
        <input type="checkbox" className=' rounded-xl my-auto h-16 w-16'onChange={()=>handleCheck(item.id)}checked={item.checked}/>
            <label style={(item.checked)?{textDecoration:"line-through"}:null}className='text-2xl my-auto mx-auto  '>{item.item}</label>
                <div className=' my-auto rounded-full text-4xl p-3 bg-green-400 hover:bg-red-600 '>
                    <FaTrashRestore onClick={()=>handelDelect(item.id)}className='border-none outline-none' role="button" tabIndex="0"/>
                </div>
    </li>
    </div>
  )
}

export default Lineitems