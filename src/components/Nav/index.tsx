import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../redux/store/hook'
import { Menu } from 'antd'
import { Link, NavLink } from 'react-router-dom'






const Nav = () => {

    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)
    console.log('Mav rerendered');

    const PublicNav = () => {
        return (
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} >
                <Menu.Item key="1"><NavLink to='/'>Home</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to='/about'>About</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink to='/contact-us'>Contact Us</NavLink></Menu.Item>
                <Menu.Item key="4"><NavLink to='/login'>Sign In</NavLink></Menu.Item>
                <Menu.Item key="5"><NavLink to='/login'>Get Started</NavLink></Menu.Item>
            </Menu >
        )
    }



    const PrivateNav = () => {
        return (
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1"><Link to='/admin'>Dashboard</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/admin/coupons'>Coupon</Link></Menu.Item>
                <Menu.Item key="3"><Link to='/admin/bikes'>Bikes</Link></Menu.Item>
                <Menu.Item key="4"><Link to='/admin/notFoundPage'>Not-Found-Page</Link></Menu.Item>
                <Menu.Item key="5"><Link to='/'>Logout</Link></Menu.Item>
            </Menu>
        )
    }


    const PNaev = React.useMemo(PrivateNav, [PrivateNav, isLoggedIn])
    const PubNaev = React.useMemo(PublicNav, [PublicNav, isLoggedIn])



    return (
        <>
            {isLoggedIn ? PNaev : PubNaev}
        </>

    )
}

export default Nav