import utils from "..";

describe("Utils/String", () => {
  it("generateRandomString", () => {
    const randomOne = utils.string.generateRandomString();
    const randomTwo = utils.string.generateRandomString();

    expect(randomOne.length).toBe(16);
    expect(randomOne).not.toBe(randomTwo);
  });
});
