import { useState } from "react"
import { useContext } from "react"
import { NameContext } from "../App"


const FavStu = () => {
    const {favStu, setFavStu} =useContext(NameContext)
   
    return (

        <div>
            
            {favStu.map((item) => (
                <div>{item.Stuname}<button className="text-red-600">  Remove</button></div>
            ))}
        </div>
    );
};


export default FavStu