import React, { useState } from 'react'
const Content = () => {
    const [text,setext]=useState("Move")
    function handelramdom(){
        const name=["Go!","Earn","Grow"]
        const int=Math.floor(Math.random()*3)
        setext(name[int]);
    }
    const [count,setcount]=useState(0)
    function handelincrement(){
        setcount(count+1)
    }
    function handeldecrement(){
        setcount(count-1)
    }
  return (
      <main className="w-screen h-5/6 flex flex-col">
        <div className=' bg-gray-500 h-full flex flex-col'>
            <div className='first-letter: mx-auto flex flex-col my-auto w-full'>
                <div className='mx-auto flex flex-row'>
                    <button onClick={handeldecrement} className=" bg-red-600 my-auto h-10 text-3xl w-10 rounded-lg ">-</button>
                    <p className='text-3xl text-center w-20'>{count}</p>
                    <button onClick={handelincrement} className="bg-green-700 my-auto h-10 w-10 text-3xl rounded-lg ">+</button>
                </div>
            <div className=' flex my-5 flex-col float-none'>
                <p className='w-screen text-center mx-auto text-3xl'>Let's {text}</p>
                <button className='mx-auto w-36 h-10 mt-5 rounded-2xl bg-black ' onClick={handelramdom}>Click to change</button>
            </div>
            </div>
        </div>
    </main>
  )
}
export default Content