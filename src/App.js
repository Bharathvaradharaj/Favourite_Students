import { Link } from "react-router-dom";
import ListStu from "./Components/ListofStu";
import FavStu from "./Components/FavStu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
const NameContext = createContext()
function App() {

  const [listStu, setlistStu] = useState([{ id: 1, Stuname: "Bharath" }, { id: 2, Stuname: "Nithin" }, { id: 3, Stuname: "Simran" }, { id: 4, Stuname: "Pradeep" }, { id: 5, Stuname: "Deepika" }])

  const [favStu, setFavStu] = useState([]);

  // const addfav = (clickid) => {
  //   const student = listStu.find((item) => item.id === clickid);
  //   if (student) {
  //     setFavStu([...favStu, student]);
  //   }
  // }

  const addfav = (clickid) => {

    const favarr = listStu.find((items) => items.id == clickid);

    if (favarr) {

      setFavStu([...favStu, favarr]);
    }
   
  }

  return (

    <>

      <div>
        <BrowserRouter>
          <NameContext.Provider value={{ listStu, setlistStu, addfav, favStu, setFavStu }}>
            <div className="bg-[#BD5A5B] p-10 flex gap-4 ">

              <Link to={"/"} className="underline">  List of Students</Link>
              <Link to={"/fav"} className="underline">Favourite Students</Link>

            </div>
            <Routes>
              <Route path={"/"} element={<ListStu></ListStu>}></Route>
              <Route path={"/fav"} element={<FavStu  ></FavStu>}></Route>
            </Routes>
          </NameContext.Provider>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
export { NameContext }