import { Route, Routes } from "react-router-dom"
import Blue from "./Blue"
import Red from "./Red"
import Home from "./Home"
import Orange from "./Orange"
import Purple from "./Purple"
// import { Blue, Red, Home } from "."


export default function MainSection() {
    return (
        <div id='main-section'>
            <Routes>
                <Route path='/blue' element={<Blue />}/>
                <Route path='/red' element={<Red />} />
                <Route path='/' element={<Home />}/>
                <Route path='/orange' element={<Orange />}/>
                <Route path='/purple' element={<Purple />}/>
            </Routes>
        </div>
    )
}