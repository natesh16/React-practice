import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import React, { useState } from 'react'
import Additem from './Additem';

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
    
    const addnewitem=(item)=>{
      const id=items.length ? items[items.length -1].id + 1 : 1
      const addnewitems={id,checked:false,item}
      const listnewitems={...item,addnewitems}
      setitems(listnewitems)
      localStorage.setItem("Todo-List",JSON.stringify(listnewitems)) 
    }
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
      Text.preventDefalt()
      if (!newitems) return;
      //addnewitmes 
      addnewitem(newitems)
      setnewitems('')

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
