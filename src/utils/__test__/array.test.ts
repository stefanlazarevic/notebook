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

  it("chunk", () => {
    const input = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    const output = [[10, 20], [30, 40], [50, 60], [70, 80], [90]];

    expect(utils.array.chunk(input, 2)).toEqual(output);
  });

  it("swap", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const output = [4, 2, 3, 1, 5, 6];

    expect(utils.array.swap(input, 0, 3)).toEqual(output);
  });
});
