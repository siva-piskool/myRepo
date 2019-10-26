import React from "react";
import { Row, Card } from "react-bootstrap";
import "./Card.css";
export default function CardSection() {
  return (
    <Row className="m-2" >
      <Card className="pc-vmv col-md-4 pc-vision m-1">
        <Card.Body>
          <img src={require("../../../images/i-vision.png")} />
          <Card.Title>Vision</Card.Title>
          <Card.Text>To be a model of excellence for solving complex educational problems.</Card.Text>
        </Card.Body>
      </Card>
      <Card className="pc-vmv col-md-4 pc-mission m-1">
        <Card.Body>
          <img src={require("../../../images/i-vision.png")} />
          <Card.Title>Mission</Card.Title>
          <Card.Text>Our responsibility is to prepare every student for success in college, career, and their life.</Card.Text>
        </Card.Body>
      </Card>
      <Card className="pc-vmv col-md-4 pc-values m-1">
        <Card.Body>
          <img src={require("../../../images/i-vision.png")} />
          <Card.Title>Values</Card.Title>
          <Card.Text>We are dedicated to helping you achieve your goals by flexible programs.</Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
}
