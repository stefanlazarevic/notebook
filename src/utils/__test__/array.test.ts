import utils from "..";

describe("Utils/Array", () => {
  it("first", () => {
    const input = [10, 14];
    const output = 10;

    expect(utils.array.first(input)).toEqual(output);
  });

  it("last", () => {
    const input = [10, 14];
    const output = 14;

    expect(utils.array.last(input)).toEqual(output);
  });
});
