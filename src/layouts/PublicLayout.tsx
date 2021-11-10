import { Outlet } from "react-router"
import { Link } from "react-router-dom"
import { Layout, Menu } from 'antd'

const PublicLayout = (props: any) => {
    const { Header, Footer, Content } = Layout
    return (
        <Layout>
            <Header>
                <PublicNav />
            </Header>
            <Content><Outlet /></Content>
            <Footer><h1>Footer</h1></Footer>
        </Layout>
    )
}

export default PublicLayout


const PublicNav = () => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/about'>About</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/contact-us'>Contact Us</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/login'>Sign In</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/login'>Get Started</Link></Menu.Item>
        </Menu>
    )
}