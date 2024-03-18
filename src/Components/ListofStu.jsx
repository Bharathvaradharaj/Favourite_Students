import { useState } from "react"
import { useContext } from "react"
import { NameContext } from "../App"

const ListStu = () => {
    const { listStu, setlistStu } = useContext(NameContext)
const{addfav}= useContext(NameContext)

    // function addfav(clickid) {

    //    var favarr = listStu.filter(function(items){

    //     if(items.id ==clickid){

    //         return true
    //     }
    //     else{
    //         return false
    //     }
    //    })

    //    setlistStu(favarr)
    // }


    return (
        <>
            {
                listStu.map(function (items) {
                    return <div className="flex flex-row gap-5 place-items-center justify-start  w-fit">
                        <h1 className="p-3">{items.id}. {items.Stuname}</h1>


                        <button className="bg-black w-fit text-white border rounded-md " onClick={() => addfav(items.id)}> Add to Favourite</button>

                    </div>
                })
            }
        </>
    )
}

export default ListStu