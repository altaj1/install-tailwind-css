import React from 'react';
import about from "./about.css"
import imiges from "../../imiges/2nd-altaj.png.jpg"
import Button from 'react-bootstrap/Button';


const About = () => {
    return (
        <div className='bg-slate-800 disply2 ' id='about' >
            <div className='width'>
               <img src={imiges} alt="" /> 
            </div>
            <div className=" about2">
                <h6 className=' text-sky-400/25'>About me</h6>
                <h2 className='text-sky-400/50'>Al-taj</h2>
                <p>Hello! I'm Aa-taj. Web Developre with over 1 years fo experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, React JS, React Router DOM, Bootstrap, TailwindCSS. Strong background in management and leadership.  </p>
                <h4>My Skills</h4>
                
                <Button variant="dark" className='skills about2'>HTML</Button>
                <Button variant="dark" className='skills about2'>CSS</Button>
                <Button variant="dark"className='skills about2'>JavaScript</Button>
                <Button variant="dark"className='skills about2'>React</Button>
                <br />
                <Button variant="dark" className='skills about2'>TailwindCSS</Button>
                <Button variant="dark" className='skills about2'> Bootstrap</Button>
                <Button variant="dark" className='skills about2'>React Router DOM</Button>
                <br />
                <Button variant="outline-primary" className='skills about2'>Learn More→</Button>{' '}
                
                
                
                

            </div>

        
        </div>
    );
};

export default About;