import { FaTrashRestore } from "react-icons/fa";
import Items from "./Items";
const Content = ({items,handleCheck,handelDelect}) => {

    return (
      <main className="text-white h-5/6 flex">
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