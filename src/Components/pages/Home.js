import React from 'react';
import Title from '../Title';
import logo from '../../images/GOHLS.png';
import cardImg from '../../images/about-img.png';
import faq from '../../images/faq-img.png';
import howToJoin from '../../images/how-to-join-img.png';
import '../../styles/Home.css';
import { Discord, Facebook, Instagram, Tiktok, Twitch, Twitter, Youtube } from 'react-bootstrap-icons';
function Home() {
  return (
    <div className='Home d-flex flex-column'>
        <header className='Home-header justify-content-center'>
            <img src={logo} className="Home-logo" alt="gohls logo" />
            <Title />
        </header>
        <div className='Home-links justify-content-center'>
            <a href='https://www.twitch.tv/gohls_official' target="_blank" rel="norefferrer noreferrer">
                <Twitch color="white" size={50}/>
            </a>
            <a href='Https://discord.gg/gohls' target="_blank" rel="norefferrer noreferrer">
                <Discord color="white" size={50}/>
            </a>
            <a href='https://www.facebook.com/groups/1267865927385400/?ref=share_group_link' target="_blank" rel="norefferrer noreferrer">
                <Facebook color="white" size={50}/>
            </a>
            <a href='https://instagram.com/gohls_official1?igshid=NTdlMDg3MTY=' target="_blank" rel="norefferrer noreferrer">
                <Instagram color="white" size={50}/>
            </a>
            <a href='https://twitter.com/GOHLS_Official1?t=VbU2OF4WGaQOnhJ5vTVYIA&s=09' target="_blank" rel="norefferrer noreferrer">
                <Twitter color="white" size={50}/>
            </a>
            <a href='https://youtube.com/@gohls_official6692' target="_blank" rel="norefferrer noreferrer">
                <Youtube color="white" size={50}/>
            </a>
            <a href='https://www.tiktok.com/@gohls_official?_t=8aPDbvdPWgI&_r=1' target="_blank" rel="noreferrer">
                <Tiktok  color="white" size={50}/>
            </a>

        </div>
        <hr />

        <div className='page-links justify-content-center'>        <div className=' row row-cols-1 row-cols-md-3 g-4'>
            <div className='col'>
                <div className='card bg-transparent sm-3 border-2 rounded-1 text-center h-100'>
                    <img src={cardImg} className='card-img-top' alt=""/>
                    <div className='card-body'></div>
                    <div className='card-footer'>
                        <h5 className='card-title'>ABOUT</h5>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div className='card bg-transparent sm-3 border-2 rounded-1 text-center h-100'>
                    <img src={howToJoin} className='card-img-top' alt=""/>
                    <div className='card-body'><a href="Https://discord.gg/gohls" className='stretched-link'></a></div>
                    <div className='card-footer'>
                        <h5 className='card-title'>JOIN NOW</h5>

                    </div>
                </div>
            </div>
            <div className='col'>
                <div className='card bg-transparent sm-3 border-2 rounded-1 text-center h-100'>
                    <img src={faq} className='card-img-top' alt=""/>
                    <div className='card-body'></div>
                    <div className='card-footer'>
                        <h5 className='card-title'>FAQ</h5>

                    </div>
                </div>
            </div>
        </div>
        </div>
        <div>footer</div>
    </div>
  );
}

export default Home;