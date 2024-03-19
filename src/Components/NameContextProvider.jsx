// import { createContext } from "react";

// import { useState } from "react";

// const NameContext = createContext()


// function NameContextProvider(data) {
//     console.log(data)
//     const [listStu, setlistStu] = useState([{ id: 1, Stuname: "Bharath" }, { id: 2, Stuname: "Nithin" }, { id: 3, Stuname: "Simran" }, { id: 4, Stuname: "Pradeep" }, { id: 5, Stuname: "Deepika" }])

//     const [favStu, setFavStu] = useState([]);


//     const addfav = (clickid) => {

//         const favarr = listStu.find((items) => items.id == clickid);

//         if (favarr) {

//             setFavStu([...favStu, favarr]);
//         }

//     }

//     return (

//         <>
//             <NameContextProvider value={{ listStu, setlistStu, addfav, favStu, setFavStu }}>

//                 {data}
//             </NameContextProvider>


//         </>
//     )

// }

// export default NameContextProvider
// export { NameContext }