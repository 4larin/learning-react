import { Outlet } from "react-router"
import { Link } from "react-router-dom"
import { Layout, Menu } from 'antd'

const PrivateLayout = (props: any) => {

    const { Header, Footer, Content, Sider } = Layout

    return (
        <Layout>
            <Header className='header'>
                <PrivateNav />
            </Header>
            <Layout>
                <Sider>Sidebar</Sider>
                <Content><Outlet /></Content>
            </Layout>
            <Footer><h1>Her is the footer</h1></Footer>
        </Layout >
    )
}

export default PrivateLayout

const PrivateNav = () => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1"><Link to='/admin'>Dashboard</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/admin/coupons'>Coupon</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/admin/bikes'>Bikes</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/admin/notFoundPage'>Not-Found-Page</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/login'>Logout</Link></Menu.Item>
        </Menu>
    )
}
