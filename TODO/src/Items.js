import React from 'react';
import Lineitems from './Lineitems';
const Items = ({items,handelDelect,handleCheck}) => {
  return (
    <ul className='flex flex-col w-1/2 mx-auto h-full'>
            {items.map((item)=>(
              <Lineitems
              item={item}
              key={item.id}
              handelDelect={handelDelect}
              handleCheck={handleCheck}
              />
            ))}
        </ul>
  )
}
export default Items;