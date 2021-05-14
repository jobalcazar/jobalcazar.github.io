import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class Navbarcomp extends Component{
    render(){
        return(
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Jose Balcazar</Navbar.Brand>
      <Nav className="mr-auto">
        {/* <Nav.Link href="/">Home</Nav.Link> */}
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/experience">Experience</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
        )
}
}

export default Navbarcomp;