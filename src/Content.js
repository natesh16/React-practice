import React from 'react'
const Content = () => {
    function handelnamechanger(){
        const name=["Earn","Work","Play With Code"]
        const list =Math.floor(Math.random()*3);
        return name[list]
      }
  return (
    <div className='h-5/6 flex bg-red-600 w-1/2 mx-auto'>  
    <p className='w-full my-auto text-center'>Let's{handelnamechanger()}</p>
    </div>
  )
}
export default Content