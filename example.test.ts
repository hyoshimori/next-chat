import { square } from "./example";

describe("square", () => {
  it("Check if the calculation is correct.", () => {
    const expected = 4;
    expect(square(2)).toStrictEqual(expected);
  });
});
