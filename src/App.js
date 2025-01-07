import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import Categories from "./components/Categories";
import Home from "./Home";
import Myorders from "./components/Myorders";
import Account from "./components/Account";



function App(){
  return(
    <div >
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/categories' element={<Categories />}/>
    <Route path='/myorders' element={<Myorders />}/>
    <Route path='/account' element={<Account />}/>

    </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;