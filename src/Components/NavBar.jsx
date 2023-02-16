import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import logo from "../logo.png";
import { Link } from 'react-router-dom';



function NavBar() {
  

    return (
        <>
            <nav className='navMenu'>

                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="auto"
                            height="100%"
                            className="logo"
                            />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link className='navMenu' href="/bottles">Bottled beers</Nav.Link>
                            <Nav.Link className='navMenu' href="/wines">Wines</Nav.Link>
                            <Nav.Link className='navMenu' href="/soft">Soft drinks</Nav.Link>
                            <Nav.Link className='navMenu' href="/beer">Beer kegs</Nav.Link>
                            <Nav.Link className='navMenu' href="/cocktails">Cocktails</Nav.Link>
                            <Nav.Link className='navMenu' href="/gin">Gin</Nav.Link>
                            <Nav.Link className='navMenu' href="/spirits">Spirits</Nav.Link>
                           
                           
                           
                        </Nav>

                        
                    </Navbar.Collapse>
                </Container>
                            </nav>
            
        </>
    );
}

export default NavBar;