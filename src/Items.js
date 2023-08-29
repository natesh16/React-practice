import React from 'react'
import { FaTrashRestore } from "react-icons/fa";

const Items = ({items,handelDelect,handleCheck}) => {
  return (
    
    <ul className='flex flex-col w-1/2 mx-auto h-full'>
            {items.map((item)=>(
                <li className='text-center my-auto justify-center mx-28 flex h-20 text-white'>
                    <input type="checkbox" className=' rounded-xl my-auto h-16 w-16'
                        onChange={()=>handleCheck(item.id)}checked={item.checked}/>
                     <label style={(item.checked)?{textDecoration:"line-through"}:null}
                    className='text-2xl my-auto mx-auto  '>{item.item}</label>
                     <div className=' my-auto rounded-full text-4xl p-3 bg-green-400 hover:bg-red-600 '><FaTrashRestore onClick={()=>handelDelect(item.id)}
                      className='border-none outline-none' role="button" tabIndex="0"/>
                      </div>
                </li>
            ))}
        </ul>
  )
}

export default Items