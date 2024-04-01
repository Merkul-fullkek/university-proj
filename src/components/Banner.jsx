import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/img/banner-1.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - 50 * 1);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Системным Аналитиком?", "Аналитиком больших данных?", "Разработчиком искусственного интеллекта?" ];
    const period = 1500;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 5) : fullText.substring(0, text.length + 5);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Добро пожаловать на сайт кафедры</span>
                        <h1>{`Привет,Аббитуриент,хочешь стать `}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                        <button onClick={() => console.log('connect')}> Оставить заявку <ArrowRightCircle/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}></Col>
                    <img src = {headerImg} alt="Headder IMG"/>
                </Row>
            </Container>
        </section>
    )
}