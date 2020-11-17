import React from "react";
import Form from "../Forms/Form.js";
import "./Voucher.css";

const Voucher = (props) =>  {
    return (
      <div>
        {props.bigvoucher ? (
          <form>
            <input
              type={props.type}
              placeholder="Voucher code"
              style={{ height: "30px", padding: "10px", width: "245px" }}
            />
            <button
              type="submit"
              value="RedeemButton"
              style={{
                height: "54px",
                backgroundColor: "#33A0FF",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            >
              Redeem
            </button>
          </form>
        ) : (
         <form>
            <input
              type={props.type}
              placeholder="Voucher code"
              style={{ height: "30px", padding: "5px" }}
            />
            <button
              type="submit"
              value="RedeemButton"
              style={{
                height: "44px",
                backgroundColor: "#33A0FF",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            >
              Redeem
            </button>
          </form>
        )}
      </div>
    );
 }

export default Voucher;

  