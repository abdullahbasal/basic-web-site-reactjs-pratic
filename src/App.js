import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Gallery from "./Components/Gallery/Gallery";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 4, offset: 4 }}>
            <Nav>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/gallery">Gallery</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/gallery">
            <Gallery></Gallery>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
