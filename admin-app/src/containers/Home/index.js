import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import "./style.css";
import { NavLink } from "react-router-dom";

const Home = (props) => {
  return (
    <Layout sidebar>
      {/* <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Products</NavLink>
              </li>
              <li>
                <NavLink to={"/orders"}>Orders</NavLink>
              </li>
            </ul>
          </Col>
          <Col md={10} style={{ marginLeft: "auto" }}>
            container
          </Col>
        </Row>
      </Container> */}
      {/* <Jumbotron style={ {margin: '2rem', background: '#fff'}} className="text-center">
              <h1>Welcome to Admin dashboard</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime labore voluptate ratione delectus laborum nemo illo placeat possimus
                ex saepe cumque aperiam ea, nam tenetur nihil distinctio officia hic quisquam!</p>
            </Jumbotron> */}
      container
    </Layout>
  );
};

export default Home;
