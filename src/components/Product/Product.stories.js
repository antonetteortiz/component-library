import React from "react"; 
import { storiesOf } from "@storybook/react"; 
import Product from "./Product"; 

storiesOf("Product", module) //here you name the component and from my understanding you always have to call module
  .add(
    "Macbook-transparent",
    () => (
      //you name the story you're creating and using arrow functions, you call the componet youre adding data from and add props to it
      <Product />
    ) //you have to call the component you're adding it from
  )
  .add(
    "Macbook-transparent-filled",
    () => <Product filled /> //we add the fill prop to the Product b/c we would use it in our 'if' statement to differenciate between each story
  )
  .add("Macbook transparent row", () => <Product row />)
  .add("Beats row", () => <Product beats />)
  .add("Beats Macbook", () => <Product macbookbeats />);
