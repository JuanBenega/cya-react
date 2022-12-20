import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../img/Logo.png'


const Header = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='header'>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo Cuerpo y Armonía" className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='navbarMenu'>
          <Nav className="me-auto">
            <Nav.Link href="#pricing" className='menuItem'>Nosotros</Nav.Link>
            <NavDropdown className='menuServicios menuItem' title="Servicios" id="collasible-nav-dropdown">
              <NavDropdown.Item className='menuItem' href="#action/3.1">Entrenamiento</NavDropdown.Item>
              <NavDropdown.Item className='menuItem' href="#action/3.2">Masajes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='menuItem' href="#deets">Artículos bienestar</Nav.Link>
            <Nav.Link className='menuItem' href="#memes">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}

export default Header