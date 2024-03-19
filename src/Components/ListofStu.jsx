import { useState } from "react"
import { useContext } from "react"
import { NameContext } from "./NameContextProvider"

const ListStu = () => {
    const { listStu, addfav  ,favStu} = useContext(NameContext)
    const [clickedIds, setClickedIds] = useState([]);
    

    const handleAddFavClick = (id) => {
        if (!clickedIds.includes(id)) {
            setClickedIds([...clickedIds, id]);
            addfav(id);
            console.log(addfav)
        }
    };

   
 return (
        <>
            {
                listStu.map(function (items) {
                    return <div className="flex flex-row gap-5 place-items-center justify-start  w-fit">
                        <h1 className="p-3">{items.id}. {items.Stuname}</h1>


                        <button className="bg-black w-fit text-white border rounded-md " 
                        
                        onClick={() => handleAddFavClick(items.id)}
                        disabled={clickedIds.includes(items.id) || favStu.some((favItem) => favItem.id === items.id)}
                    >
                        {favStu.some((favItem) => favItem.id === items.id) ? "Added to Favorite" : "Add to Favorite"}
                    </button>

                    </div>
                })
            }
        </>
    )
}

export default ListStu