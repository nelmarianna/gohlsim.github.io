import React from 'react';
import Title from '../Title';
import logo from '../../images/GOHLS.png';
import cardImg from '../../images/about-img.png';
import faq from '../../images/faq-img.png';
import howToJoin from '../../images/how-to-join-img.png';
import '../../styles/Home.css';
import { Discord, Facebook, Instagram, Tiktok, Twitch, Twitter, Youtube } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container className='pt-5'>
    <Row className='justify-content-center'>
        <Col md="auto">
            <Row className='Home-header'>
            <Col>
                <Row className='justify-content-center'>
                    <img src={logo} className="Home-logo" alt="gohls logo"/>
                </Row>
            </Col>
            <Col>
                <Title />
            </Col>
            </Row>
        </Col>
        </Row>
        <Row className='Home-links justify-content-center' xs="auto">
            <Col> 
                <a href='https://www.twitch.tv/gohls_official' target="_blank" rel="norefferrer noreferrer">
                    <Twitch color="white" size={50}/>
                </a>
            </Col>
           <Col>
                <a href='Https://discord.gg/gohls' target="_blank" rel="norefferrer noreferrer">
                    <Discord color="white" size={50}/>
                </a>
            </Col>
            <Col> 
                <a href='https://www.facebook.com/groups/1267865927385400/?ref=share_group_link' target="_blank" rel="norefferrer noreferrer">
                    <Facebook color="white" size={50}/>
                </a>
            </Col>
           <Col>
                <a href='https://instagram.com/gohls_official1?igshid=NTdlMDg3MTY=' target="_blank" rel="norefferrer noreferrer">
                    <Instagram color="white" size={50}/>
                </a>
            </Col>
            <Col> 
                <a href='https://twitter.com/GOHLS_Official1?t=VbU2OF4WGaQOnhJ5vTVYIA&s=09' target="_blank" rel="norefferrer noreferrer">
                    <Twitter color="white" size={50}/>
                </a>
            </Col>
           <Col>
                <a href='https://youtube.com/@gohls_official6692' target="_blank" rel="norefferrer noreferrer">
                    <Youtube color="white" size={50}/>
                </a>
            </Col>
            <Col>  
                <a href='https://www.tiktok.com/@gohls_official?_t=8aPDbvdPWgI&_r=1' target="_blank" rel="noreferrer">
                    <Tiktok  color="white" size={50}/>
                </a>
            </Col>
        </Row>
        <hr />
        <Row  className='justify-content-center'>
            <Col md="auto">
            <Row className='justify-content-center'>
                <Button size="lg" href="Https://discord.gg/gohls" variant="outline-warning" >JOIN NOW</Button>
                </Row>
            </Col>
        </Row>

        <Row className='page-links justify-content-center row row-cols-1 row-cols-md-3 g-4'>
                <Col>
                    <div className='card bg-transparent sm-3 text-center h-100'>
                        <img src={howToJoin} className='card-img-top' alt=""/>
                        <div className='card-body'></div>
                        <div className='card-footer'></div>
                    </div>
                </Col>
                <Col>
                    <div className='card bg-transparent sm-3 text-center h-100'>
                        <img src={cardImg} className='card-img-top' alt=""/>
                        <div className='card-body'></div>
                        <div className='card-footer'></div>
                    </div>
                </Col>
                <Col>
                    <div className='card bg-transparent sm-3 text-center h-100'>
                        <img src={faq} className='card-img-top' alt=""/>
                        <div className='card-body'></div>
                        <div className='card-footer'></div>
                    </div>
                </Col>
        </Row>
       
    </Container>
  );
}

export default Home;