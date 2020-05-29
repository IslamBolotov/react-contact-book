import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar'

const Router = () =>{
    return(
        <BrowserRouter>
            <NavBar />
            <Route path="/" exact component={()=> <Contact page="LIST"/>} />
            <Route path="/add" component={()=> <Contact page="ADD" />} />
        </BrowserRouter>
    )
}

export default Router;