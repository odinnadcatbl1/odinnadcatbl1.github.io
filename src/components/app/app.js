import React, {Fragment, useEffect} from "react";
import Header from "../header/header";
import { Route, Routes } from "react-router";
import CatList from "../cat-list/cat-list";

import './app.css'

const App = () => {
    
    return (
        <Fragment>
            <Header/>
            <Routes>
                <Route path='/' element={<CatList/>}/>
                <Route path='/favorite' element={<h1>page2</h1>}/>
            </Routes>      
        </Fragment> 
    );
}

export default App;