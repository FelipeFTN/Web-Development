import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

function SignIn() {
    window.location.href = 'http://localhost:3000/login'
}
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
                        <img 
                        alt="Profile" 
                        src={process.env.PUBLIC_URL + "Profile.png"}
                        width="40"
                        height="40"
                        class="d-inline-block align-top" 
                        onClick={SignIn}
                        />
                </Navbar>
            </div>
        </div>
    )
}
export default Header