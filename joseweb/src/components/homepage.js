import React, {Component} from 'react'
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
//import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import '../css/homepage.css'

// function swapWords(e){
//     e.preventDefault();
//     var words=['Adaptable', 'Innovative', 'Ambitious','Eager']


// }

// (function(){
//     var words = [
//         'awesome',
//         'incredible',
//         'cool',
//         'fantastic'
//         ], i = 0;
//     setInterval(function(){
//         $('#changerificwordspanid').fadeOut(function(){
//             $(this).html(words[i=(i+1)%words.length]).fadeIn();
//         });
//     }, 2000);
        
// })();

class HomePage extends Component{

    constructor(props){
        super(props);
        this.state = {
          location: 0,
        };
      }

    render(){
        return(
            <Container>
             
                    {/* <Col id="Welcome1Col"> */}
                    <p id = 'hello'> Hi my name is, </p>
                    <h1 id="welcome">Jose Balcazar.</h1>
                    <h3> I like to build things </h3>
                    <p> I am <span id ="name">Jose Balcazar</span>, a curently a Masters Student at Duke Univeristy,
                    studying Computer Science. This is my online portfolio,
                    which highlights my career endeavors as well as display my web developement capability.
                    I created this website myself using a React JS framework.
                    </p>
                    <ButtonToolbar>
                    <Button variant="outline-primary">Contact Me</Button>
                    <Button variant="outline-success">Projects</Button>
                    </ButtonToolbar>
                    
                    
                
                
                {/* <Row> */}
                    {/* <Col>
                    <h1>Currently a staff financial consultant @ Ernst & Young</h1>
                    <h3>I am <span class="rotate">Adaptable, Innovative, Ambitious, Eager</span></h3>
                    </Col>
                    <Col>
                    <img src= {"../images/EY_logo.png"} alt="EY_logo"/>
                    </Col> */}
                {/* </Row> */}
                
                    


            </Container>
        )
    }
}

export default HomePage;