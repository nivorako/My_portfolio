import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Knowledges from "./pages/Knowledges"
import NotFound from "./pages/NotFound"
import PortFolio from "./pages/PortFolio"

import "./styles/styles.scss"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Knowledges" element={<Knowledges />} />
                    <Route path="/PortFolio" element={<PortFolio />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
