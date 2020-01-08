import { mount } from "enzyme";
import About from "../pages/about";

describe("Pages", () => {
  describe("About", () => {
    it("should render the header without an error", function() {
      const wrap = mount(<About />);
      expect(wrap.find("div h1").text()).toBe("About");
    });

    it("should render the message without an error", function() {
      const wrap = mount(<About />);
      expect(wrap.find("div p").text()).toBe(
        "This is where you'll find all sorts of information about me."
      );
    });
  });
});
