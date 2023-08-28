import React, { useState } from 'react'
import { FaTrashRestore } from "react-icons/fa";
const Content = () => {
    const [items, setitems]=useState(
        [
            {   id:1,
            checked:true,
            item:"Pratice code"
        },
        {   id:2,
            checked:false,
            item:"Drawing"
        },
        {   id:3,
            checked:true,
            item:"Make somethink new"} 
        ])
        const handlecheck=(id)=>{
            const listitems=items.map((item)=>
                item.id===id ? {...item,checked:!item.checked}:item
            )
            setitems(listitems)
        }
  return (
      <main className="text-white h-5/6 ">
        <ul className='flex flex-col w-1/2 mx-auto h-full'>
            {items.map((item)=>(
                <li className='text-center my-auto justify-center mx-28 flex h-20 text-white'>
                    <input type="checkbox" className=' rounded-xl my-auto h-16 w-16'
                        onChange={()=>handlecheck(item.id)}
                        checked={item.checked}
                        />
                     <label className='text-2xl my-auto mx-auto  '>{item.item}</label>
                     <div className=' my-auto rounded-full text-4xl p-3 bg-red-600 '><FaTrashRestore
                        className=' border-none outline-none'
                    role="button"
                    tabIndex="0"
                     /></div>
                </li>
            ))}
        </ul>
    </main>
  )
}
export default Content