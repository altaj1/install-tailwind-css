import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import home from "./home.css"
import imiges from "../../imiges/al-taj.png.jpg"
import Button from 'react-bootstrap/Button';
import { HashLink } from 'react-router-hash-link';



const Home = () => {
    return (
        <div className="">


            <div className="">
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand   className='font-weight highligh name'><h3>Al-taj</h3></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"  
            className='home'>Home</Nav.Link>
            <Nav.Link href="#about" className='about'>AboutMe</Nav.Link>
            <Nav.Link href="#service" className='portfolio'>Service</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
                
            </div>
         <div className='bg-current marin disply '>
            
            <div className=" thisMargin ">
            <h4 class="text-sky-400/25  font-weight " >Hi,I'm Al-taj</h4>
            <h1 class="text-sky-400/75  font-weight" >I'm <samp className='highligh '> Full-stack </samp></h1>
            <h2 class="text-sky-400/75 font-weight">Expert Developer.</h2>
            <p>I am a full-stack web developre. I can provide clean code and pixel perfect desing.</p>
            <Button variant="outline-primary">My Projects→</Button>{' '}

            </div>

            <div className="">
            <img src={imiges} alt="" />
 
            </div>
            
        </div>   
          
    </div>
    );
};

export default Home;