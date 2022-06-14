class TrieNode {
  constructor() {
    this.words = new Map();
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let curr = this.root;

    for (let c of word) {
      if (!curr.words.has(c)) curr.words.set(c, new TrieNode());
      curr = curr.words.get(c);
    }

    curr.end = true;
  }

  hasWord(word) {
    let curr = this.root;

    for (let c of word) {
      if (!curr.words.has(c)) return false;
      curr = curr.words.get(c);
    }

    return true;
  }

  startsWith(prefix) {
    let curr = this.root;

    for (let c of prefix) {
      if (!curr.words.has(c)) return false;
      curr = curr.words.get(c);
    }

    return true;
  }
}
