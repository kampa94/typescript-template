import { helloWorld } from "../index";

describe("helloWorld", () => {
  it("should return 'Ciao mondo!'", () => {
    expect(helloWorld()).toBe("Ciao mondo!");
  });
});