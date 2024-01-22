import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ValentinesPage } from "./pages/ValentinesPage"
import { Landing } from "./pages/Landing";

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/lovemeplease" element={<ValentinesPage/>} />
                <Route path="/happy6months" element={<Landing/>} />
            </Routes>
        </Router>
    )
}