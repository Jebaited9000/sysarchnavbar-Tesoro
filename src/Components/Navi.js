import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navi() {
  return (
    
    <div className='navBar'>
        <div className= 'navlink'>
        <img className='logo' src="./job.png"/>
        <h3 className='sign'>Job Finder</h3>
            <Navbar>
            <Container>
            <Nav className="me-auto">
                <NavLink className = 'link ' to ="/">Home</NavLink>
                <NavLink className = 'link ' to ="/aboutUs">Jobs</NavLink>
                <NavLink className = 'link ' to ="/login">Login</NavLink>
                <NavLink className = 'link ' to ="/registration">Registration</NavLink>
            </Nav>
            </Container>
        </Navbar>
        </div>
    </div>
  )
}

export default Navi