import * as React from "react";
import { shallow } from "enzyme";
import { WelcomeMessage } from "../index";

test("doesn't display header if name is missing", () => {
  const element = shallow(<WelcomeMessage name="" message="" />);
  expect(element.find("h1").length).toEqual(0);
});

test("doesn't display header if name is missing, even with message provided", () => {
  const element = shallow(<WelcomeMessage name="" message="Hello World" />);
  expect(element.find("h1").length).toEqual(0);
  expect(element.find("p").text()).toEqual("Hello World");
});

test("displays header if name provided", () => {
  const element = shallow(
    <WelcomeMessage name="Bear Grylls" message="Hello World" />
  );
  expect(element.find("h1").text()).toEqual("Home");
  expect(element.find("p").text()).toEqual("Hello World");
});
