import React from "react";
import { Container, Row, Col } from "reactstrap";
import Map from "../Assets/Map.png";
function About() {
  return (
    <Container>
      <Row>
        <Col xs="6">
          <h3>About</h3>
          <p>
            AbdullahBasal Yazılım, tüm kurumsal kimlik ve alt yapı çalışmaları
            ile birlikte fizibilitesini 1 senede bitirerek 2021 yılında resmi
            olarak çalışma hayatına başlamıştır. Fast Technology Company sloganı
            ile yola çıkan firmamızda ilk hedefimiz müşterimizin yanında
            olmaktır. Sektörde geçirilen uzun yıllar sonucu edindiğimiz tecrübe
            özetle şudur; Güncel satın alınan sıradan ürünlerden farklı olarak
            bizim sunmuş olduğumuz ürün ve hizmetlerin hiçbiri bir kereye mahsus
            değildir, bu sebepten müşteri asla yalnız bırakılmamalıdır. Çünkü
            bizim için asıl iş, tüm ürün veya hizmetler bitirilip teslim
            edildikten sonra başlıyor. Sahada veya ofis içinde, standart satış
            elemanlarının genellikle sektör ile bilgi sahibi olmaması ve kısa
            vadeli süreçlerde, müşteri memnuniyetini düşünmeden yapılan
            anlaşmalar sonucu yaşanan olumsuzlukların önüne geçmek amacı ile
            firmamız bünyesinde satış elemanı bulunmamaktadır. Firmamızın tüm
            müşterileri ile AbdullahBasal Yazılım yetkilileri tek tek ve özel
            olarak ilgileniyor. Yıllar içerisinde edindiğimiz yazılım
            tecrübemizle sahada gönül rahatlığı ile müşteri isteklerine cevap
            verebilmekteyiz.
          </p>
        </Col>
        <Col xs="6">
          <img src={Map} width="450" height="450" />
        </Col>
      </Row>
    </Container>
  );
}
export default About;
