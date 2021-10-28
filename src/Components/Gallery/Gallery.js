import React from "react";
import { Card, Container, Row, CardImg, Col } from "reactstrap";

export default function Gallery() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card inverse>
              <CardImg
                width="100%"
                height="300px"
                src="https://i0.wp.com/adviceal.com/teknoloji/wp-content/uploads/2019/09/code.jpg?fit=2000%2C1335&ssl=1"
                alt="Card image cap"
              />
            </Card>
          </Col>
          <Col>
            <Card inverse>
              <CardImg
                width="100%"
                height="300px"
                src="https://miro.medium.com/max/1400/1*fkyEgZnbf3jJP3-G7xykLg.jpeg"
                alt="Card image cap"
              />
            </Card>
          </Col>
          <Col>
            <Card inverse>
              <CardImg
                width="100%"
                height="300px"
                src="https://www.sfcyazilim.com.tr/imgs/rsz_code.jpg"
                alt="Card image cap"
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card inverse>
              <CardImg
                width="100%"
                height="300px"
                src="https://i2.milimaj.com/i/milliyet/75/0x0/5fa2ae9fadcdeb0cd8b153c8.jpg"
                alt="Card image cap"
              />
            </Card>
          </Col>
          <Col>
            <Card inverse>
              <CardImg
                width="100%"
                height="300px"
                src="https://www.horato.com/files/editor_images/2018/12/yazilim_mimarisi1.jpg"
                alt="Card image cap"
              />
            </Card>
          </Col>
          <Col>
            <Card inverse>
              <CardImg
                width="100%"
                height="300px"
                src="https://beykoz.edu.tr/content/editor/5cdbbf1bc0787_coding-9249201920.jpg"
                alt="Card image cap"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
