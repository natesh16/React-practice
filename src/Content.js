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
            localStorage.setItem("Todo-List",JSON.stringify(listitems)) 
        }

        const handeldelect=(id)=>{
            const delectitems=items.filter((item)=>
                item.id!==id)
                setitems(delectitems)
                localStorage.setItem("Todo-List",JSON.stringify(delectitems))
            
        }
    
  return (
      <main className="text-white h-5/6 flex">
    {(items.length)?(
        <ul className='flex flex-col w-1/2 mx-auto h-full'>
            {items.map((item)=>(
                <li className='text-center my-auto justify-center mx-28 flex h-20 text-white'>
                    <input type="checkbox" className=' rounded-xl my-auto h-16 w-16'
                        onChange={()=>handlecheck(item.id)}
                        checked={item.checked}
                        />
                     <label 
                        style={(item.checked)?
                        {textDecoration:"line-through"}:null}
                    className='
                     text-2xl my-auto mx-auto  '>{item.item}</label>
                     <div className=' my-auto rounded-full text-4xl p-3 bg-green-400 hover:bg-red-600 '><FaTrashRestore
                        onClick={()=>handeldelect(item.id)}
                      className=' border-none outline-none'
                    role="button"
                    tabIndex="0"
                     /></div>
                </li>
            ))}
        </ul>
        ):
        (
            <p className='mx-auto my-auto text-4xl font-bold'>YOUR LIST IS EMPTY</p>
        )
    }
    </main>
  )
}
export default Content