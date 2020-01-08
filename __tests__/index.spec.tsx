import * as React from "react";
import { mount } from "enzyme";
import Index from "../pages/index";

describe("Pages", () => {
  describe("Index", () => {
    it("should render the header without an error", function() {
      const wrap = mount(<Index />);
      expect(wrap.find("div h1").text()).toBe("Home");
    });

    it("should render the message without an error", function() {
      const wrap = mount(<Index />);
      expect(wrap.find("div p").text()).toBe(
        "This is the main page of the app."
      );
    });
  });
});
