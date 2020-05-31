import PrefixTrie from "../PrefixTrie";

describe("Тестирање префикс дрвета.", () => {
	it("Може да направи ново дрво.", () => {
		expect(new PrefixTrie()).not.toBe(undefined);
	});

	it("Може да убаци нову реч у дрво.", () => {
		const t = new PrefixTrie();

		t.insertWord("test");

		expect(t.contains("test")).toBeTruthy();
	});

	it("Може да убаци речи у дрво.", () => {
		const t = new PrefixTrie();

		t.insertWords(["test", "testiranje", "beograd"]);

		expect(t.contains("testiranje")).toBeTruthy();
	});

	it("Враћа речи које почињу префиксом.", () => {
		const t = new PrefixTrie();

		t.insertWords(["test", "testiranje", "beograd"]);

		expect(t.getWords("te")).toEqual(["test", "testiranje"]);
	});
});
