import React from "react";
import { Form } from "react-bootstrap";
export default function ContactForm() {
  return (
    <Form>
      <Form.Group>
        <Form.Row>
          <Form.Label className="col-sm-2 offset-sm-2">Name:</Form.Label>
          <Form.Control
            className="col-sm-6"
            type="text"
            placeholder="Enter Name"
          />
        </Form.Row>
      </Form.Group>

      <Form.Group>
        <Form.Row>
          <Form.Label className="col-sm-2 offset-sm-2">Email:</Form.Label>
          <Form.Control
            className="col-sm-6"
            type="email"
            placeholder="Enter Email"
          />
        </Form.Row>
      </Form.Group>
      <Form.Group>
        <Form.Row>
          <Form.Label className="col-sm-2 offset-sm-2">Phone:</Form.Label>
          <Form.Control
            className="col-sm-6"
            type="text"
            placeholder="Enter Mobile [LandLine] Number"
          />
        </Form.Row>
      </Form.Group>
      <Form.Group>
        <Form.Row>
          <Form.Label className="col-sm-2 offset-sm-2">Comments:</Form.Label>
          <Form.Control className="col-sm-6" as="textarea" rows="3" />
        </Form.Row>
      </Form.Group>
    </Form>
  );
}
