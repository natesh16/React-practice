import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import React, { useState } from 'react'
import Additem from './Additem';
import Searchitems from './Searchitems';

function App() {
  const [items, setitems]=useState(JSON.parse(localStorage.getItem('Todo-List'))
    //local 
    // [
    //   {   id:1,
    //     checked:true,
    //     item:"Pratice code"
    // },
    // {   id:2,
    //     checked:false,
    //     item:"Drawing"
    // },
    // {   id:3,
    //     checked:true,
    //     item:"Make somethink new"} 
    //   ]
    )
    //Array for new items 
    const [newitems,setnewitems]=useState('')

    //Array for search items
    const [search,setsearch]=useState('')


    const addnewitem=(item)=>{
      const id=items.length ? items[items.length - 1].id+1 : 1;
      const addnewitems={id,checked:false,item} 
      const listnewitems=[...items,addnewitems]
      setitems(listnewitems)
      localStorage.setItem("Todo-List",JSON.stringify(listnewitems)) 
    }
    const handelsubmit=(e)=>{
      e.preventDefault() 
      if (!newitems) return;
      addnewitem(newitems)
      setnewitems('')
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
  return ( 
        <div className='text-black dark:text-white absolute bg-slate-950'>
          <Header title="NATESH.ORG" />
          <Additem
            newitems={newitems}
            setnewitems={setnewitems}
            handelsubmit={handelsubmit}
          />
          <Searchitems
          search={search}
          setsearch={setsearch}
           />
          <Content 
          items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
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
