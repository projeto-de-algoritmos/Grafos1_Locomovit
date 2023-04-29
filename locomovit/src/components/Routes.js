import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./Main";
import AboutUs from "./AboutUs";
import AboutTheProject from "./AboutTheProject";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/about-the-project' element={<AboutTheProject />} />
        </Routes >
    )
}

export default Routes;