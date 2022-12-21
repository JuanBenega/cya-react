import { Row, Container, Col } from 'react-bootstrap';


const Home = () => {
    return (
        <Container>
            <Row>
                <h1>Entrena, cambia de hábitos, conecta con lo importante para mejorar tu vida</h1>
                <Col lg='6' sm='12'>
                    <h2>Quienes somos...</h2>
                    <p>
                        Nuestra misión es poder orientarte en una transición hacia un estilo de vida más
                        saludable y beneficioso. Desde un enfoque holístico nos basamos en los pilares de la buena
                        alimentación, la actividad física adecuada y la conexión con la naturaleza, para lograr de esta
                        manera un<span> Cuerpo en Armonía</span>. Proponemos la conexión con las experiencias vividas
                        a traves del propio cuerpo y mediante la implementación de diferentes prácticas como la
                        meditación, la comtemplación y el aprendizaje de disfrutar el momento presente buscando estar en
                        <span>Armonía con los demás planos</span>.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home