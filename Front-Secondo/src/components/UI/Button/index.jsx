import React from "react";
import { Form } from "react-bootstrap";
import "./index.css";

const Button = (props) => {
  return <Button className="" type={props.type}>{props.Label}</Button>;
};

export default Input;
