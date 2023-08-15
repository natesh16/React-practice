import React from 'react'

const Content = () => {
    function handelnamechanger(){
        const name=["Earn","Work","Play With Code"]
        const list =Math.floor(Math.random()*3);
        return name[list]
      }
  return (
    <div>
        <p className=' absolute top-10'>Let's {handelnamechanger()}</p>
    </div>
  )
}

export default Content