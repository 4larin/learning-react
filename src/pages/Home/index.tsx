import { Row, Col, Typography, Button } from 'antd'
import styled from 'styled-components'
import Background from '../../assets/images/Delivery landing.png'


const Home = () => {
    const { Title } = Typography
    return (
        <StyledSection>
            <Row align="middle">
                <Col sm={{ span: 24, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                    <Title level={1}>The one click solution for easy and fast delivery</Title>
                    <Title level={3}>Get the best delivery expierence with <br />our <StyledSpan>Live Tracking </StyledSpan> & <StyledSpan>AI features</StyledSpan></Title>
                    <Button>Download from Google</Button>
                    <Button>Download from Apple</Button>
                </Col>
                <Col xs={{ span: 24, offset: 1 }} lg={{ span: 12, offset: 2 }}>
                    <img src={Background} alt='background' />
                </Col>
            </Row>
        </StyledSection>

    )
}

export default Home

const StyledSpan = styled.span`
    color: #663399;
`

const StyledSection = styled.section`
    background: rgb(219,216,236);
    background: linear-gradient(62deg, rgba(219,216,236,1) 0%, rgba(223,220,238,1) 23%, rgba(226,223,240,1) 100%);
    img{
        width: 100%;
    }
    h1{
        font-size: 54px;
    }
`


