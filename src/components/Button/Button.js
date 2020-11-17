import React from 'react';
import "./Button.css"

const Button = (props) => {
let classList = '';
let types = [
  "primary",
  "danger",
  "success",
  "warning",
  "default",
  "addCart",
  "cartIcon",
  "favorites",
  "favoritesIcon",
];

if (types.includes(props.type)){
    classList += `button-${props.type}`
}

if(props.outline){
    classList +=` button-${props.type}-outline`   
}

if (props.faded) {
  classList += ` button-${props.type}-faded`;
}

if (props.large) {
  classList += ` button-${props.type}-large`;
}

if (props.largeOutline) {
  classList += ` button-${props.type}-largeOutline`;
}

if (props.largeFaded) {
  classList += ` button-${props.type}-largeFaded`;
}


   return <button onClick={props.onClick} className={classList}>
   {props.label}
    </button>
}
export default Button; 