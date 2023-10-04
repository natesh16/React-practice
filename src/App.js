import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import React, { useEffect, useState } from 'react'
import Additem from './Additem';
import Searchitems from './Searchitems';

function App() {
  //API Request
  const API_ADD="  http://localhost:3500/items"
  //API responce 
  const [items, setitems] = useState([]);
  //Array for new items 
  const [newitems, setnewitems] = useState('');
  //Array for search items
  const [search, setsearch] = useState('');
  //Error feach
  const [feacherr,setfeacherr]=useState(null);
  //Loding Request
  const [isloading,setisloading]=useState(true)

  //API request and resoponce handling
  useEffect(() => {
    const feacting=async()=>{
      try{
        const responce=await fetch(API_ADD)
        if(!responce.ok)throw Error("Data not found");
        const listitems=await responce.json()
        setitems(listitems)
        console.log(listitems)
        setfeacherr(null)
      }
      catch(err){
        setfeacherr(err.message)
      }
      finally{
        setisloading(false)
      }
    }
    setTimeout(()=>{
      (async()=> await feacting())()
    },5000)
  }, [])
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

    //Loding Code

  //setitems (usestate value);
  const addnewitem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addnewitems = { id, checked: false, item }
    const listnewitems = [...items, addnewitems]
    setitems(listnewitems)
  }
  const handelsubmit = (e) => {
    e.preventDefault()
    if (!newitems) return;
    addnewitem(newitems)
    setnewitems('')
  }
  const handleCheck = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setitems(listitems)
  }
  const handelDelect = (id) => {
    const delectitems = items.filter((item) =>
      item.id !== id)
    setitems(delectitems)
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
      <main>
        {isloading && <p className='text-center m-5 text-3xl text-green-600 font-bold'>Is Loding..</p>}
        {feacherr && <p className='text-center m-5 text-3xl text-red-600 font-bold'>{`Error:${feacherr}`}</p>}
        {!isloading && !feacherr && <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handelDelect={handelDelect}
          handleCheck={handleCheck}
          />}
        </main>
      <Footer
        itemslength={items.length}
      />
    </div>
  );
}
export default App;