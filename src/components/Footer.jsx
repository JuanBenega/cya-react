import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoByN from '../img/LogoByN.png';
import Whats from '../img/whatsapp.png';
import Face from '../img/facebook.png';
import Inst from '../img/instagram.png';
import { Whatsapp, Facebook, Instagram } from "react-bootstrap-icons";

const Footer = () => {
    return (
        <Navbar className='footer'>
            <Row >
                <Container fluid className='navFooter'> 
                    <Col lg='4' sm='11'>
                        <Nav className="me-auto">
                            <Nav.Link href="https://web.whatsapp.com">
                                {/* <img src={Whats} alt="Whatsapp" width="30%" /> */}
                                <Whatsapp className='iconFooter'/>
                            </Nav.Link>
                            <Nav.Link href="#features">
                                {/* <img src={Face} alt="Whatsapp" width="30%" /> */}
                                <Facebook className='iconFooter'/>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                {/* <img src={Inst} alt="Whatsapp" width="30%" /> */}
                                <Instagram className='iconFooter'/>
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg='4' sm='11'>
                        <Nav className="me-auto menuFooter">
                            <Nav.Link href="#home">Bienestar</Nav.Link>
                            <Nav.Link href="#features">Entrenamiento</Nav.Link>
                            <Nav.Link href="#pricing">Masajes</Nav.Link>
                            <Nav.Link href="#pricing">Contacto</Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg='4' sm='11'>
                        <Navbar.Brand href="#home">
                            <img src={LogoByN} alt="Logo Cuerpo y Armonía" />
                        </Navbar.Brand>
                    </Col>
                </Container>
            </Row>
        </Navbar>
    )
}

export default Footer