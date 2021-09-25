import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'


function Header(){
    return(
        <div className="Header">
            <div className="header_left">
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                            alt="Logo"
                            src={process.env.PUBLIC_URL + "Hippocampus.png"}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            />{' '}
                            Hippocampus
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
            <div className="header_right">
                <img 
                alt="Profile" 
                src={process.env.PUBLIC_URL + "Profile.png"}
                width="40"
                height="40"
                class="d-inline-block align-top" 
                />
            </div>
        </div>
    )
}
export default Header