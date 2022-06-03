import React, {Fragment, useEffect} from "react";
import Header from "../header/header";
import { Route, Routes } from "react-router";
import CatList from "../cat-list/cat-list";

import './app.css'
import LoveCatList from "../love-cat-list/love-cat-list";

const App = () => {
    
    return (
        <Fragment>
            <Header/>
            <Routes>
                <Route path='/' element={<CatList/>}/>
                <Route path='/favorite' element={<LoveCatList/>}/>
            </Routes>      
        </Fragment> 
    );
}

export default App;