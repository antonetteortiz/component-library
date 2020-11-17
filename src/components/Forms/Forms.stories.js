import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Form";

storiesOf("Form", module)
  .add("Small", () => <Form label="Email" placeholder="Email" size="small" />)
  .add("Medium", () => <Form label="Email" placeholder="Email" />)
  .add("Large", () => <Form label="Email" placeholder="Email" size="large" />);
