import React from 'react';
import services from "./servise.css"
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import imige from "../../imiges/website-development-banner_33099-1687.jpg"


const Service = () => {
    return (
        <div className='bg-zinc-800 service' id='service'>
          
          <div className="service2 " >

          <div className=" service3">
          <h5 >Services I offer to my clients</h5>
          <h1>My Best <span className='text-sky-400/75 font-weight'> Service</span> </h1> 
          </div>
          <div className="service4">
          <Card className='cardBody' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imige} />
      <Card.Body >
        <Card.Title><span className='text-sky-400/75 font-weight'> Service</span>  </Card.Title>
        <Card.Text className='service'>
         I use animation as a third dimension by which
         to simplify experienses and kuiding thro oach and every interaction.
        </Card.Text>
        <Button variant="outline-dark">Go somewhere</Button>
      </Card.Body>
    </Card>

          </div>

          </div>
           
        </div>
    );
};

export default Service;