import { Link } from "react-router-dom"



const Login = (props: any) => {
    return (
        <div>
            <h1>Login Page</h1>
            <Link to="/admin">Login</Link>
            <Link to="/forgot-password">Forgot Password</Link>
        </div>
    )
}

export default Login