import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Home.css";
export default function App() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Welcome My World!",
        "This project Task",
        "This is a test project",
        "Thank You !",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container id="home-content">
      <Row>
        <Col>
          <h1>Hello Developers</h1>
          <span ref={el}></span>
          <br />
          <img src="https://cdn.chip.gen.tr/images/content/2016062115575461872/hackerlar-verilerinizi-nasil-caliyor.jpg" />
        </Col>
      </Row>
    </Container>
  );
}
