import React from 'react'

const Newpost = ({posttitle,setposttitem,handlesubmite,postbody,setpostbody}) => {
  return (
    <main className=' mt-7 w-screen h-screen max-h-screen'>
        <h1 className='text-4xl text-center'>Newpost</h1>
        <div className=' h-screen flex w-screen'>
          <form onSubmit={handlesubmite} className="flex flex-col w-96 mx-auto justify-evenly h-2/3 rounded-2xl  my-auto border-4 ">
            <label htmlFor="text" className='text-center text-3xl'>Title</label>
            <input type="text" 
            className=' w-64 mx-auto text-xl h-10 rounded-lg pl-5'
            name="postttile" 
            id="posttitle" 
            value={posttitle}
            onChange={(e)=>setposttitem (e.target.value)}
            placeholder="Title"
            />
            <label htmlFor="text" className='text-center text-3xl'>Post Data</label>
            <textarea type="text" 
            className='w-64 mx-auto h-32 rounded-lg pl-5'
            name="postbody" 
            id="postbody" 
            placeholder='Message'
            value={postbody}
            onChange={(e)=>setpostbody(e.target.value)}/>
            <button type='submit' className='bg-green-200 w-56 mx-auto rounded-2xl py-3 px-8 '>Submit</button>
          </form>
        </div> 


    </main>
  )
}

export default Newpost