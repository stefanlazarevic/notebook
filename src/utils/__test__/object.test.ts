import utils from "..";

describe("Utils/Object", () => {
  it("deleteProperty", () => {
    const input = { a: 10, b: 12 };
    const output = { b: 12 };

    expect(utils.object.deleteProperty("a", input)).toEqual(output);
  });
});
