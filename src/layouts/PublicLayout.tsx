import { Outlet } from "react-router"
import { Link } from "react-router-dom"

const PublicLayout = (props: any) => {
    return (
        <nav>
            <h1>Public Navbar</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact-us'>Contact Us</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
            <hr />
            <Outlet />
        </nav>
    )
}

export default PublicLayout