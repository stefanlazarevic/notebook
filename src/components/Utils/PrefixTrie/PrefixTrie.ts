class TrieNode {
	character: string;
	children: any;
	isWord: boolean;

	constructor(character: string) {
		this.character = character;
		this.children = {};
		this.isWord = false;
	}
}

export default class PrefixTrie {
	root: TrieNode;

	constructor() {
		this.root = new TrieNode("");

		this.insertWord = this.insertWord.bind(this);
		this.insertWords = this.insertWords.bind(this);
		this.getNode = this.getNode.bind(this);
		this.contains = this.contains.bind(this);
		this.getWords = this.getWords.bind(this);
	}

	insertWord(word: string) {
		if (typeof word !== "string") {
			console.warn("insertWord method expects string value but got ", typeof word);
			return;
		}

		let currentNode = this.root;

		for (const letter of word) {
			if (!currentNode.children[letter]) {
				currentNode.children[letter] = new TrieNode(letter);
			}

			currentNode = currentNode.children[letter];
		}

		currentNode.isWord = true;
	}

	insertWords(words: string[] = []) {
		for (let index = 0; index < words.length; index++) {
			this.insertWord(words[index]);
		}
	}

	getNode(word: string) {
		let currentNode = this.root;

		for (const letter of word) {
			if (!currentNode.children[letter]) {
				return;
			}

			currentNode = currentNode.children[letter];
		}

		return currentNode;
	}

	contains(word: string) {
		let currentNode = this.getNode(word);

		if (currentNode && currentNode.isWord) {
			return true;
		}

		return false;
	}

	getWords(prefix: string, limit: number = 5) {
		const words: string[] = [];
		let currentNode = this.getNode(prefix);

		if (currentNode) {
			fork(currentNode, prefix);
			return words;
		}

		function fork(node: TrieNode, word: string): string[] | boolean {
			function child(character: string) {
				return fork(node.children[character], word + character);
			}

			node.isWord && words.push(word);

			return words.length >= limit || Object.keys(node.children).some(child);
		}
	}
}
