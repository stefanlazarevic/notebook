import LinkedList from "../LinkedList";
import { link } from "fs";

describe("LinkedList test cases.", () => {
  let linkedList: LinkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("size", () => {
    expect(linkedList.getSize()).toBe(0);
  });

  it("isEmpty", () => {
    expect(linkedList.isEmpty()).toBe(true);
  });

  it("append", () => {
    linkedList.append(20);
    linkedList.append(40);
    expect(linkedList.getSize()).toBe(2);
    expect(linkedList.isEmpty()).toBe(false);
  });

  it("prepend", () => {
    linkedList.prepend(20);
    linkedList.prepend(40);
    expect(linkedList.getSize()).toBe(2);
    expect(linkedList.isEmpty()).toBe(false);
  });

  it("toArray", () => {
    linkedList.prepend(10);
    linkedList.append(20);
    linkedList.append(30);
    linkedList.prepend(40);

    expect(linkedList.toArray()).toEqual([40, 10, 20, 30]);
  });

  it("traverse", () => {
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);

    const output: any[] = [];

    linkedList.traverse((value, index) => {
      output.push([value, index]);
    });

    expect(output).toEqual([
      [10, 0],
      [20, 1],
      [30, 2]
    ]);
  });

  it("fromArray", () => {
    const linkedList = LinkedList.fromArray([1, 2, 3, 4]);

    expect(linkedList.getSize()).toBe(4);
  });

  it("reverse", () => {
    const linkedList = LinkedList.fromArray([1, 2, 3, 4]);

    expect(linkedList.reverse().toArray()).toEqual([4, 3, 2, 1]);
  });

  it("traverse reversed", () => {
    const linkedList = LinkedList.fromArray([1, 2, 3, 4]);

    const output: any[] = [];

    linkedList.reverse().traverse(value => {
      output.push(value);
    }, true);

    expect(output).toEqual([1, 2, 3, 4]);
  });

  it("has", () => {
    const linkedList = LinkedList.fromArray([1, 2, 3, 4]);

    expect(linkedList.has(4)).toBe(true);
    expect(linkedList.has(14)).toBe(false);
  });

  it("removeFirst", () => {
    linkedList.append(10);
    linkedList.removeFirst();

    expect(linkedList.isEmpty()).toBe(true);

    linkedList.append(10).append(20);
    linkedList.removeFirst();

    expect(linkedList.toArray()).toEqual([20]);

    linkedList
      .append(10)
      .append(20)
      .append(30);
    linkedList.removeFirst();

    expect(linkedList.reverse().toArray()).toEqual([30, 20, 10]);

    linkedList.clear();

    expect(linkedList.removeFirst()).toBe(false);
  });
});
