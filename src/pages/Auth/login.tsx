import { Button, Form, Input, Checkbox } from "antd";
import { NavLink, Navigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../redux/store/hook";
import { login } from '../../redux/slices/userSlice'
import styled from "styled-components";



const StyledSection = styled.section`
    height: 100%;
    min-height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`




const Login = (props: any) => {
    const isLoggedIn = useAppSelector((state) => state.user)
    console.log(isLoggedIn);
    const dispatch = useAppDispatch()


    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(login(values))
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <StyledSection>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </StyledSection>
    )
}

export default Login