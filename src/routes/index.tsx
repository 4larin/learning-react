import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'
import ProtectedRoutes from './ProtectedRoutes'
import { PublicLayout, PrivateLayout, PageLoader } from './../layouts';
import { Login, ForgotPassword } from '../pages/Auth';
import { CSSTransition } from 'react-transition-group';

const loadModule = (link: string) => lazy(() => import(`../modules/${link}`))
const loadPage = (link: string) => lazy(() => import(`../pages/${link}`))


const Home = loadPage("Home")
const About = loadPage("About")
const Contact = loadPage("Contact")

const Dashboard = loadModule('Dashboard')
const Coupons = loadModule('Coupons')
const Bikes = loadModule('Bikes')




const AppRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route index element={<PageTransition component={<Home />} />} />
                    <Route path={"about"} element={<About />} />
                    <Route path={"contact-us"} element={<Contact />} />
                    <Route path={"login"} element={<Login />} />
                    <Route path={"forgot-password"} element={<ForgotPassword />} />
                    <Route path={"*"} element={<NotFoundPage />} />
                </Route>
                <Route path="admin" element={<PrivateLayout />}>
                    <Route element={<ProtectedRoutes />}>
                        <Route index element={<Dashboard />} />
                        <Route path="/admin/coupons" element={<Coupons />} />
                        <Route path="/admin/bikes" element={<Bikes />} />
                        <Route path={"*"} element={<NotFoundPage />} />
                    </Route>
                </Route>
            </Routes>

        </Suspense>
    )
}

export default AppRoutes


const PageTransition = (props: any) => {
    return (
        <CSSTransition
            in={props != null}
            timeout={300}
            unmountOnExit

        >
            {/* <h1>Hello</h1> */}
            {props.component}
        </CSSTransition>
    )
}








