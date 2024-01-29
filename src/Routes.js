import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";

import { ValentinesPage } from "./pages/ValentinesPage"
import { Landing } from "./pages/Landing";
import { YesPage } from "./pages/YesPage";
import NoPage from "./pages/NoPage";
import Switch from "react-bootstrap/esm/Switch";

export const Routing = () => {
    return (
            <Switch>
                <Route path="/lovemeplease" element={<ValentinesPage/>} />
                <Route path="/happy6months" element={<Landing/>} />
                <Route path="/yesyesyes" element={<YesPage/>} />
                <Route path="/doYouMeanIt" element={<NoPage/>} />
            </Switch>
                
    )
}