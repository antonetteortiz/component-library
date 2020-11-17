import React from "react";
import { storiesOf } from "@storybook/react";
import Voucher from "./Voucher";
import "./Voucher.css";

storiesOf("Voucher", module)
  .add("Voucher", () => <Voucher type="voucher" />)
  .add("Voucher Large", () => <Voucher type="bigvoucher" />);
