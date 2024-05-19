import React from "react";
import { Form } from "react-bootstrap";
import "../index.css";

const Textarea = (props) => {
  return (
    <Form.Group className="mb-3" controlId="formGroupTextarea">
      <Form.Label className="kanit-paragraphtextMedium font-color">
        {props.Label}
      </Form.Label>
      <Form.Control
        as="textarea"
        className={`kanit-paragraphSmall text-field-textarea ${
          props.isInvalid ? "input-invalid" : ""
        }`}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.errorMessage && (
        <Form.Text className="text-muted error-message red-text kanit-paragraphSmall">
          {props.errorMessage}
        </Form.Text>
      )}
    </Form.Group>
  );
};

export default Textarea;
