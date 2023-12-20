import React from "react";
import Home from './Home';
import Createuser from "./Createuser";
import Updateuser from "./Updateuser";
import Viewuser from "./Viewuser";

import {BrowserRouter,Routes,Route,} from 'react-router-dom';

 function App()
{
    return (
        <>
  

    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Createuser' element={<Createuser/>}></Route>
        <Route path='/updateuser/:id' element={<Updateuser/>}></Route>
        <Route path='/Viewuser/:id' element={<Viewuser/>}></Route>

        
        </Routes>
    </BrowserRouter>

    </>

    )
}
export default App;