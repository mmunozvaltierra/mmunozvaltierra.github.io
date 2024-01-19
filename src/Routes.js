import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ValentinesPage } from "./pages/ValentinesPage"

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/lovemeplease" element={<ValentinesPage/>} />
            </Routes>
        </Router>
    )
}