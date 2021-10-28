import React from "react";
import ContactPicture from "../Assets/contactPicture.jpg";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
function Contact() {
  function thxAlert() {
    alert("Thank You.");
  }
  return (
    <Container>
      <Row>
        <Col xs="6">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter Email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Enter Password"
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">Contact Us</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> I confirm the information.
              </Label>
            </FormGroup>
            <Button onClick={() => thxAlert()}>Submit</Button>
          </Form>
        </Col>
        <Col xs="6">
          <img src={ContactPicture} width="500" height="330" />
        </Col>
      </Row>
    </Container>
  );
}
export default Contact;
