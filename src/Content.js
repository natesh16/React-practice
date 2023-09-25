import Items from "./Items";


const Content = ({items,handleCheck,handelDelect}) => {
    return (
      <main className="text-white h-full  flex bg-slate-950">
           {(items.length)?(
        <Items
        items={items}
        handelDelect={handelDelect}
        handleCheck={handleCheck}
        />
      ):
        (
            <p className='mx-auto my-auto text-4xl font-bold'>YOUR LIST IS EMPTY</p>
        )
    }
    </main>
  )
}
export default Content