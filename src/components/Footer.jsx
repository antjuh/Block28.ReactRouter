import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div id='footer'>
            <Link to="/red">Red</Link>
            <Link to="/blue">Blue</Link>
            <Link to="/">Home</Link>
            <Link to="/purple">Purple</Link>
            <Link to="/orange">Orange</Link>
        </div>
    )
}