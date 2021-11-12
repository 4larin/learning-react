import { Navigate, Outlet } from "react-router"
import { Layout } from 'antd'
import Nav from "../components/Nav"
import { useAppSelector } from "../redux/store/hook"

const PrivateLayout = (props: any) => {
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)
    const { Header, Footer, Content, Sider } = Layout

    if (isLoggedIn) {
        return (
            <Layout>
                <Header className='header'>
                    <Nav />
                </Header>
                <Layout>
                    <Sider>Sidebar</Sider>
                    <Content><Outlet {...props} /></Content>
                </Layout>
                <Footer><h1>Her is the footer</h1></Footer>
            </Layout >
        )
    } else {
        return <Navigate to="/login" />
    }
}

export default PrivateLayout
