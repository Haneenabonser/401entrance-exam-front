import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav , Container } from 'react-bootstrap';




class Header extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Digimon App</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/favorite">My Digimons</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </>
        )
    }
}

export default Header;
