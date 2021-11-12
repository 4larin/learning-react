import { Row, Col, Typography } from 'antd'
import styled from 'styled-components'
import Background from '../../assets/images/Delivery landing.png'
import Google from '../../assets/images/Download from Playstore.png'
import Apple from '../../assets/images/Download from Apple.png'
import { useAppSelector } from '../../redux/store/hook'
import React from 'react';


const Home = () => {
    const state = useAppSelector((state) => state)
    console.log(state);
    const { Title } = Typography
    return (
        <>
            <StyledSection>
                <Row align="middle">
                    <Col sm={{ span: 24, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                        <Title level={1}>One click solution for easy and fast delivery</Title>
                        <Title level={3}>Get the best delivery expierence with <br />our <StyledSpan>Live Tracking </StyledSpan> & <StyledSpan>AI features</StyledSpan></Title>
                        <div className="DownloadButtonGrpup">
                            <a href="/#"><img className="Download_button" src={Apple} alt="Download from Apple" /> </a>
                            <a href="/#"><img className="Download_button" src={Google} alt="Download from Google" /> </a>
                        </div>
                    </Col>
                    <Col xs={{ span: 24, offset: 1 }} lg={{ span: 12, offset: 2 }}>
                        <img src={Background} alt='background' />
                    </Col>
                </Row>
            </StyledSection>
            <StyledSection>
                <Title level={3}>Why <span>Errander?</span></Title>
            </StyledSection>
        </>
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
    .DownloadButtonGrpup{
        display: flex;
        img{
            height: 64px;
            width: 167px;
            :not(:last-child){
                margin-right: 16px;
                display: none;
            }
        }
    }
`


