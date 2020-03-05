import utils from "..";

describe("Utils/String", () => {
  it("generateRandom", () => {
    const randomOne = utils.string.generateRandom();
    const randomTwo = utils.string.generateRandom();

    expect(randomOne.length).toBe(16);
    expect(randomOne).not.toBe(randomTwo);
  });
});
