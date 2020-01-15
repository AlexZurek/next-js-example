import * as React from "react";
import { shallow } from "enzyme";
import { NavBar } from "../index";
import Link from "next/link";
import { Button } from "@material-ui/core";

test("Contains 3 links", () => {
  const element = shallow(<NavBar />);
  expect(element.find(Link).length).toEqual(3);
});

test("The first link is to /posts", () => {
  const element = shallow(<NavBar />);
  const postLink = element.find(Link).at(0);

  expect(postLink.prop("href")).toEqual("/posts");
  expect(postLink.find(Button).text()).toEqual("Posts");
});

test("The second link is to /about", () => {
  const element = shallow(<NavBar />);
  const aboutLink = element.find(Link).at(1);

  expect(aboutLink.prop("href")).toEqual("/about");
  expect(aboutLink.find(Button).text()).toEqual("About Me");
});

test("The third link is to /contact", () => {
  const element = shallow(<NavBar />);
  const contactLink = element.find(Link).at(2);

  expect(contactLink.prop("href")).toEqual("/contact");
  expect(contactLink.find(Button).text()).toEqual("Contact Us");
});
