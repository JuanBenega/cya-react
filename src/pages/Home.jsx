import { Row, Container, Col, Image } from 'react-bootstrap';
import Img1 from '../img/imagen-1.avif'
import Img2 from '../img/imagen-2.avif'
import Img3 from '../img/imagen-3.avif'

const Home = () => {
    return (
        <Container className='us'>
            <Row>
                <h1>Entrena, cambia de hábitos, conecta con lo importante para mejorar tu vida</h1>
                <Col lg='6' sm='12'>
                    <h2>Quienes somos...</h2>
                    <p className='usText'>
                        Nuestra misión es poder orientarte en una transición hacia un estilo de vida más
                        saludable y beneficioso. Desde un enfoque holístico nos basamos en los pilares de la buena
                        alimentación, la actividad física adecuada y la conexión con la naturaleza, para lograr de esta
                        manera un<span> Cuerpo en Armonía</span>. Proponemos la conexión con las experiencias vividas
                        a traves del propio cuerpo y mediante la implementación de diferentes prácticas como la
                        meditación, la comtemplación y el aprendizaje de disfrutar el momento presente buscando estar en
                        <span>Armonía con los demás planos</span>.
                    </p>
                </Col>
                <Col lg='6' sm='12' className='usImages '>
                    <Row>
                        <Col lg='6' sm='12'>
                            <Image rounded fluid src={Img1} alt="Entrenamiento Corporal" className='usImg' />
                        </Col>
                        <Col lg='6' sm='12'>
                            <Image rounded fluid src={Img2} alt="Entrenamiento Corporal" className='usImg' />
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center'>
                    <Col lg='6' sm='12'>
                            <Image rounded fluid src={Img3} alt="Entrenamiento Corporal" className='usImg mx-auto' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Home