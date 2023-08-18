import React, { useState } from 'react'
const Content = () => {
    function handelnamechanger(){
        const name=["Earn","Work","Play With Code"]
        const list =Math.floor(Math.random()*3);
        return name[list]
      }
      const [count,setcount]=useState(0)

        function handleincrement(){
          setcount(count +1)
        }
        function handledecremen(){
          setcount(count -1)
        }

  return (
    <div className='w-1/2 bg-blue-600 h-5/6 mx-auto'>
      <div className='flex h-full'>
        <div className=' mx-auto my-auto'>
            <button className='rounded-lg bg-black px-5 py-2' onClick={handledecremen}>-</button>
            <span className='p-3 text-2xl font-blod bg-red-400 m-5'>{count}</span>
            <button className='rounded-lg bg-black px-5 py-2' onClick={ handleincrement}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Content