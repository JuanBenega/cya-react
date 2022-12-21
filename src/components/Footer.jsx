import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoByN from '../img/LogoByN.png';
import { Whatsapp, Facebook, Instagram } from "react-bootstrap-icons";

const Footer = () => {
    return (
            <Row className='footer'>
                <Container fluid className='navFooter'> 
                    <Col lg='4' sm='11'>
                        <Nav className="justify-content-center">
                            <Nav.Link href="https://web.whatsapp.com">
                                <Whatsapp className='iconFooter'/>
                            </Nav.Link>
                            <Nav.Link href="#features">
                                <Facebook className='iconFooter'/>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <Instagram className='iconFooter'/>
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg='4' sm='11' className='menuFooter'>
                        <Nav className="menuFooter">
                            <Nav.Link className='itemFooter' href="#features">Entrenamiento</Nav.Link>
                            <Nav.Link className='itemFooter' href="#home">Bienestar</Nav.Link>
                            <Nav.Link className='itemFooter' href="#pricing">Masajes</Nav.Link>
                            <Nav.Link className='itemFooter' href="#pricing">Contacto</Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg='4' sm='11'>
                        <Navbar.Brand href="#home">
                            <img src={LogoByN} alt="Logo Cuerpo y Armonía" />
                        </Navbar.Brand>
                    </Col>
                </Container>
            </Row>
    )
}

export default Footer