import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { Outlet } from "react-router"
import { Link } from "react-router-dom"
import styled from "styled-components"

const PrivateLayout = (props: any) => {
    return (
        <nav>
            <PrivateAppbar />
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

const StyledNav = styled.nav`
    height: 60px;
    background-color: #9292c7;
    display: flex;
    align-items: center;
    padding: 0 100px;
    color: white;
    h3{
        font-weight: 500;
    }
`


const PrivateAppbar = () => {
    return (
        <StyledNav>
            <h3>Learning React</h3>
        </StyledNav>
    )
}


