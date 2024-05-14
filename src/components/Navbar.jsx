import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div id='navbar'>
            <Link to="/red">Red</Link>
            <Link to="/blue">Blue</Link>
            <Link to="/">Home</Link>
            <Link to="/purple">Purple</Link>
            <Link to="/orange">Orange</Link>
        </div>
    )
}