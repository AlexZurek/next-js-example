import * as React from "react";
import { mount } from "enzyme";
import Index from "../pages/index";
import { act } from "react-dom/test-utils";

describe("Pages", () => {
  describe("Index", () => {
    it("should render the header without an error", async done => {
      await act(async () => {
        const wrap = mount(<Index />);
        expect(wrap.find("div p").text()).toBe("Loading...");
        done();
      });
    });

    it("should render the message without an error", async done => {
      await act(async () => {
        const wrap = mount(<Index />);
        expect(wrap.find("div p").text()).toBe(
          "This is the main page of the app."
        );
        done();
      });
    });
  });
});
