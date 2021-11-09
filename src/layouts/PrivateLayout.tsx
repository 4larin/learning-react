import { Outlet } from "react-router"
import { Link } from "react-router-dom"

const PrivateLayout = (props: any) => {
    return (
        <nav>
            <h1>Private Navbar</h1>
            <ul>
                <li><Link to='/admin'>Dashboard</Link></li>
                <li><Link to='/admin/coupons'>Coupons</Link></li>
                <li><Link to='/admin/bikes'>Bikes</Link></li>
                <li><Link to='/admin/notFoundPage'>Not-Found-Page</Link></li>
                <li><Link to='/'>Logout</Link></li>
            </ul>
            <hr />
            <Outlet />
        </nav>
    )
}

export default PrivateLayout