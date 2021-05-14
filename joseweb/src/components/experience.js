import React, {Component} from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
// import '../css/experience.css'
class Experience extends Component{
    render(){
        return(
      <Container >
        <h1 id= "subTitle">Work Experience</h1>
        <div id= 'job1'>
        <h3>Research Assitant @ Duke Economics Department</h3>
        <ul>
            <li> Support Dr. Pat Bayer in researching the ways
                 and ramifications of how the media report police involved shootings 
            </li>
            <li>
                Develop Spacy NLP pipelines to parse source documents to quantify passive
                and active voice disparities among reporting of killings
            </li>
        </ul>
        </div>
        <div id= 'job2'> 
        <h3>Consultant @ Ernst & Young</h3>
        <ul>
            <li>Produced a constraint problem solver to optimize work distribution among teams
                at Fortune 500 invesment bank
            </li>
            <li>
                Created a python data management pipeline, analyzing a major investment bank’s
                global regulatory risk which was presented to C-suite leadership
            </li>
            <li> Won 1st place at EY’s Banking and Capital Markets Hackathon 2019,
                where 3 colleagues and I built a geographical interface displaying 
                the financial risks of lending in the United States accounting
                for historical shifts in weather patterns

            </li>
        </ul>
        </div>
      </Container>  
        )
    }
}

export default Experience