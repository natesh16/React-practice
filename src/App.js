import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import React, { useState } from 'react'
import Additem from "./Additem";

function App() {

  const [newitems,setnewitems]=useState("")

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
    const handleCheck=(id)=>{
        const listitems=items.map((item)=>
            item.id===id ? {...item,checked:!item.checked}:item
        )
        setitems(listitems)
        localStorage.setItem("Todo-List",JSON.stringify(listitems)) 
    }

    const handelDelect=(id)=>{
        const delectitems=items.filter((item)=>
            item.id!==id)
            setitems(delectitems)
            localStorage.setItem("Todo-List",JSON.stringify(delectitems))
        
    }

    const handelsubmit=(Text)=>{
      console.log("handel submit call")
    }

  return (
    <div className='text-black dark:text-white '>
      <Header title="NATESH.ORG" />
      <Additem
        newitems={newitems}
        setnewitems={setnewitems}
        handelsubmit={handelsubmit}
      />
      <Content 
      items={items}
      handelDelect={handelDelect}
      handleCheck={handleCheck}
      />
      <Footer
      itemslength={items.length}
      />
    </div>
    );
  }
export default App;
