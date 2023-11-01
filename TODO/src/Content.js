import Items from "./Items";


const Content = ({items,handleCheck,handelDelect}) => {
    return (
      <>
           {(items.length)?(
        <Items
        items={items}
        handelDelect={handelDelect}
        handleCheck={handleCheck}
        />
      ):
        (
          <div className="text-white h-full  flex bg-slate-950">
            <p className='mx-auto my-auto text-4xl font-bold'>YOUR LIST IS EMPTY</p>
          </div>
        )
    }
    </>
  )
}
export default Content