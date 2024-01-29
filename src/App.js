import './App.css';
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import About from './components/About'
import { Routing } from './Routes';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";

import { ValentinesPage } from "./pages/ValentinesPage"
import { Landing } from "./pages/Landing";
import { YesPage } from "./pages/YesPage";
import NoPage from "./pages/NoPage";
import Switch from "react-bootstrap/esm/Switch";

function App() {
  return (
    // <div>
    //   <header className="palette2-background px-3">
    //     <NavBar></NavBar>
    //   </header>
    //     <Intro></Intro>
    //     <About></About>
    // </div>
    // <Routing/>
    <Routes>
                <Route path="/lovemeplease" element={<ValentinesPage/>} />
                <Route path="/happy6months" element={<Landing/>} />
                <Route path="/yesyesyes" element={<YesPage/>} />
                <Route path="/doYouMeanIt" element={<NoPage/>} />
    </Routes>
  );
}

export default App;
