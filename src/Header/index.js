import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

function HeaderComponet() {
    // Link komponenet pomogajet nam rabotat' s sqlkami pravel'no v react prilozhenii
    // Link zapuskajet react-router kotorqj v svoju o4ered' reshajet kakije komponenty pokazqvat' 
    // blagodarja Link i Route u nas ne perezagruzhajetsa stranichka a lish renderitsja komponenety
    return (
        <Navbar bg="light" className="mb-3">
            <Container>
                <Link to="/" className="navbar-brand">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    News
                </Link>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderComponet;
