import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoByN from '../img/LogoByN.png';
import Whatsapp from '../img/whatsapp.png';
import Facebook from '../img/facebook.png';
import Instagram from '../img/instagram.png';

const Footer = () => {
    return (
        <Navbar>
            <Row>
                <Container>
                    <Col lg='4' sm='11'>
                        <Nav className="me-auto">
                            <Nav.Link href="https://web.whatsapp.com">
                                <img src={Whatsapp} alt="Whatsapp" width="30%" />
                            </Nav.Link>
                            <Nav.Link href="#features">
                                <img src={Facebook} alt="Whatsapp" width="30%" />
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <img src={Instagram} alt="Whatsapp" width="30%" />
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg='4' sm='11'>
                        <Nav className="me-auto">
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