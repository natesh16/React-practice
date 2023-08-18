import React from 'react'

const Content = () => {
    function handelnamechanger(){
        const name=["Earn","Work","Play With Code"]
        const list =Math.floor(Math.random()*3);
        return name[list]
      }
const handelclick=()=>{
  console.log("WELL DONE!")
}  

const handelclick2=(name)=>{
  console.log(`WELL DONE! ${name}`)
}  

  return (
    <div className='w-1/2 bg-blue-600 h-5/6 mx-auto'>
      <div className='flex flex-col'>
        <p className='my-auto mx-auto text-black text-6xl  font-bold text-center'>Let's {handelnamechanger()}</p>
        <button onClick={()=>handelclick2("Natesh")}> click Here</button>
      </div>
    </div>
  )
}

export default Content