import React from "react";
import { Form } from "react-bootstrap";
import "../index.css";

const Textarea = (props) => {
  return (
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label className="kanit-paragraphtextMedium font-color">
        {props.Label}
      </Form.Label>
      <Form.Control
        as="textarea"
        className="kanit-paragraphSmall text-field-textarea"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
    </Form.Group>
  );
};

export default Textarea;