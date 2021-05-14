import React, {Component} from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import '../css/about.css'
class About extends Component{
    render(){
        return(
      <Container id="aboutContainer">
        <h1 id= "subTitle">About Me</h1>
      <div id= "about_me_inner">
      <Row>
      
      <Col className="center_left">
        <div className="image_container">
          <img src= {"../images/circle_jose.png"} alt="personal_photo"/>
        </div>
      </Col>
      <Col className="center_right">
        <h1>
          Currently a <span id="role">student</span> at Duke University
        </h1>
        <h4 id="major">
          <span >Major</span>: Computer Science
        </h4>
        
        <p>
          I have interests in software
          engineering specifically in building machine learning applications. This sites showcases
          some of my front end web development capabilites and serves as one of
          my personal creative projects. All of the work on this portfolio
          website is my own.
          <br /><br />
          Here are a few technologies that I am most versed in:
          <ul>
            <li>Python</li>
            <li>React</li>
            <li>PyTorch</li>
            <li>Sci-KitLearn</li>
          </ul>
          <br />
          <br />
          Please feel free to contact:
          <br />
          <span id="email">jbalcazar7@gmail.com</span>
        </p>
      </Col>
      </Row>
      </div>
      </Container>  
        )
    }
}

export default About