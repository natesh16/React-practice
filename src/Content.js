import React, { useState } from 'react'
const Content = () => {
    const [count,setcount]=useState(0)
    function handelincrement(){
        setcount(count+1)
    }
    function handeldecrement(){
        setcount(count-1)
    }
  return (
    <main className="w-screen h-5/6 flex">
    <div className='flex w-1/2  bg-blue-900 h-full justify-center mx-auto'>
        <button onClick={handeldecrement} className=" bg-red-600 my-auto h-10 text-3xl w-10 rounded-lg ">-</button>
            <div className='text-4xl w-20 text-center my-auto'>{count}</div>
        <button onClick={handelincrement} className="bg-green-700 my-auto h-10 w-10 text-3xl rounded-lg ">+</button>
    </div> 
    </main>
  )
}
export default Content