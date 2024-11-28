import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useMyContext,signOut } from '../context/Provider';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function AppNavbar() {
  const { state,dispatch } = useMyContext(); 
  const navigate = useNavigate();

  const submit = (e) => {
    signOut(dispatch);
    navigate('/');  
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand href="/">
            <img src="/images/logo.jpg" alt="CalmCompass" className="navbar-brand-image"/> CalmCompass
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/general">General</Nav.Link>
            <Nav.Link href="/advice">Professional Advice</Nav.Link>
            {!state.signin ? (
              <>
              <Nav.Link href="/assesment2">Self-Assesment</Nav.Link>
              <Nav.Link href="/community2">Community</Nav.Link>
              </>
            ) : (
              <>
              <Nav.Link href="/assesment">Self-Assesment</Nav.Link>
              <Nav.Link href="/community">Community</Nav.Link>
              </>
            )}
            <Nav.Link href="/map">Map</Nav.Link>
            {!state.signin ? (
              <Nav.Link href="/signIn">Sign In</Nav.Link>
            ) : (
              <>
              <Button type="button" className="cancel-button" onClick={() => submit()}>Sign Out</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;