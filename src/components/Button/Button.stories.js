import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

function helloWorld() {
  alert("Hello World");
}
storiesOf("Button", module)
  .add("Primary", () => (
    <Button type="primary" onClick={helloWorld} label="Primary" />
  ))
  .add("Primary Outline", () => (
    <Button label="Primary" type="primary" outline />
  ))
  .add("Primary Faded", () => <Button label="Primary" type="primary" faded />)

  .add("Primary Large", () => <Button label="Primary" type="primary" large />)
  .add("Primary Large Outline", () => (
    <Button label="Primary" type="primary" largeOutline />
  ))
  .add("Primary Large Faded", () => (
    <Button label="Primary" type="primary" largeFaded />
  ))

  .add("Danger", () => <Button type="danger" label="Danger" />)
  .add("Danger Outline", () => <Button type="danger" outline label="Danger" />)
  .add("Danger Faded", () => <Button type="danger" faded label="Danger" />)
  .add("Danger Large", () => <Button type="danger" large label="Danger" />)
  .add("Danger Large Outline", () => (
    <Button type="danger" largeOutline label="Danger" />
  ))
  .add("Danger Large Faded", () => (
    <Button type="danger" largeFaded label="Danger" />
  ))

  .add("Success", () => <Button type="success" label="Success" />)
  .add("Success Outline", () => (
    <Button type="success" outline label="Success" />
  ))
  .add("Success Faded", () => <Button type="success" faded label="Success" />)
  .add("Success Large", () => <Button type="success" large label="Success" />)
  .add("Success Large Outline", () => (
    <Button type="success" largeOutline label="Success" />
  ))
  .add("Success Large Faded", () => (
    <Button type="success" largeFaded label="Success" />
  ))

  .add("Warning", () => <Button type="warning" label="Warning" />)
  .add("Warning Outline", () => (
    <Button type="warning" outline label="Warning" />
  ))
  .add("Warning Faded", () => <Button type="warning" faded label="Warning" />)
  .add("Warning Large", () => <Button type="warning" large label="Warning" />)
  .add("Warning Large Outline", () => (
    <Button type="warning" largeOutline label="Warning" />
  ))
  .add("Warning Large Faded", () => (
    <Button type="warning" largeFaded label="Warning" />
  ))

  .add("Default", () => <Button type="default" label="Default" />)
  .add("Default Outline", () => (
    <Button type="default" outline label="Default" />
  ))
  .add("Warning Faded", () => <Button type="warning" outline label="Warning" />)
  .add("Default Large", () => <Button type="default" large label="Default" />)
  .add("Default Large Outline", () => (
    <Button type="default" largeOutline label="Default" />
  ))
  .add("Default Large Faded", () => (
    <Button type="default" largeFaded label="Default" />
  ))

  // Add to Cart
  .add("Add to Cart", () => <Button type="addCart" />)
  .add("Add to Cart w/ Icon", () => (
    <Button type="cartIcon" label="Add to Cart" />
  ))
  .add("Add to Favorites", () => <Button type="favorites" />)
  .add("Add to Favorites w/ Icon", () => (
    <Button type="favoritesIcon" label="Add to Favorites" />
  ));
