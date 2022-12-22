import { useEffect } from "react";
import { Row, Container, Col, Image } from 'react-bootstrap';
import Img1 from '../img/entrenamiento-1.avif'
import Img2 from '../img/entrenamiento-2.avif'
import Img3 from '../img/entrenamiento-3.avif'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Training = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Container fluid className='training'>
      <h1>Programas de entrenamiento integrales</h1>
      {/* Articulo 1 */}
      <Row className='trainRow'>
        <Col lg={8} className='article'>
          <h2>Programa Bases</h2>
          <p>La base del bienestar corporal es tener un cuerpo fuerte, flexible y resistente. Uno de los
            mayores problemas de la actualidad es el sedentarismo y la poca movilidad corporal, esto trae
            consigo problemas como obesidad, hipertensión, diabetes, fragilidad corporal, etc. Tengas la
            edad que tengas y sin importar las condiciones físicas en las que te encuentres es importante
            que empieces a entrenar.
            En este programa se trabaja incrementando progresivamente la intensidad para evitar lesiones,
            además se busca desarrollar paulatinamente las capacidades corporales principales como la
            fuerza, la resistencia y la movilidad, entre otras). Este programa de entrenamiento te permitirá establecer las bases para tener un
            cuerpo más fuerte y sano.</p>
        </Col>
        <Col lg={4}>
          <Image rounded fluid src={Img1} alt='Entrenamiento corporal básico' className='usImg' data-aos="zoom-in-down"
            data-aos-duration="2000" />
        </Col>
      </Row>
      {/* Articulo 2 */}
      <Row className='entrenamiento-par'>
        <Col lg={4}>
          <Image rounded fluid src={Img2} alt='Entrenamiento Pilates reformer' className='usImg' data-aos="zoom-in-down"
            data-aos-duration="2000" />
        </Col>
        <Col lg={8} className='article'>
          <h2>Programa Pilates Reformer</h2>
          <p>El Método Pilates Reformer permite un sin número de ejercicios controlados para trabajar el
            cuerpo activando todos los grupos musculares.
            Teniendo en cuenta elementos vitales como la concentración, la respiración, el control, la
            precisión y el equilibrio. Con el Entrenamiento de Pilates se puede combinar la insistencia en
            la flexibilidad propia del Yoga, con el acento en la fuerza muscular que se encuentra en los
            gimnasios, pero sin perder de vista la integridad del cuerpo buscando un equilibrio natural
            y teniendo en consideración los factores necesarios para mantener un cuerpo sano.</p>
        </Col>
      </Row>
      {/* Articulo 1 */}
      <Row className='trainRow'>
        <Col lg={8} className='article'>
          <h2>Programa Fitness Global</h2>
          <p>Es posible tener un cuerpo fuerte y funcional para la vida diaria entrenando solamente con tu
            cuerpo. Los "ejercicios corporales" fueron utilizados por muchas civilizaciones en la
            antiguedad,
            y se basan en ejercicios calisténicos que involucran varios grupos musculares en forma
            simultánea impulsando a que el cuerpo tenga que trabajar apelando a la
            estabilidad y la coordinación. Este programa de entrenamiento te
            permitirá desarrollar la capacidad aeróbica, la resistencia muscular, la fuerza, la potencia... Logrando alcanzar un
            cuerpo fuerte y saludable.</p>
        </Col>
        <Col lg={4}>
          <Image rounded fluid src={Img3} alt='Entrenamiento corporal avanzado' className='usImg' data-aos="zoom-in-down"
            data-aos-duration="2000" />
        </Col>
      </Row>
    </Container>
  )
}

export default Training