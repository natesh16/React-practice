import React, { useState } from 'react'
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
  return (
      <main className="text-white h-5/6 ">
        <ul className='flex flex-col w-1/2 mx-auto h-full'>
            {items.map((item)=>(
                <li className='text-center my-auto justify-center mx-28 flex h-20 text-white'>
                    <input type="checkbox" className=' my-auto h-16 w-16'
                        checked={item.checked}
                        />
                     <label className='text-2xl my-auto mx-auto  '>{item.item}</label>
                     <button className=' bg-red-400 w-20 my-auto rounded-3xl h-10'>Delect</button>
                </li>
            ))}
        </ul>
    </main>
  )
}
export default Content