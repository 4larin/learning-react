import { Outlet } from "react-router"
import { Layout } from 'antd'
import React from "react"
import Nav from "../components/Nav"


const PublicLayout = (props: any) => {
    const { Header, Footer, Content } = Layout
    return (
        <Layout>
            <Header>
                <Nav />
            </Header>
            <Content><Outlet {...props} /></Content>
            <Footer><h1>Footer</h1></Footer>
        </Layout>
    )
}

export default PublicLayout
