class TrieNode {
  constructor() {
    this.words = {};
    this.count = {};
    this.endWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insertWord(word) {
    if (!word.length) return null;

    let root = this.root;

    for (let c of word) {
      if (!(c in root.words)) {
        root.words[c] = new TrieNode();
        root.count[c] = 1;
      } else {
        root.count[c]++;
      }

      root = root.words[c];
    }

    root.endWord = true;
  }

  hasWord(word) {
    if (!word.length) return null;

    let root = this.root;

    for (let c of word) {
      if (!(c in root.words)) return false;
      root = root.words[c];
    }

    return root.endWord;
  }

  hasPrefix(prefix) {
    if (!prefix.length) return null;

    let root = this.root;

    for (let c of prefix) {
      if (!(c in root.words)) return false;
      root = root.words[c];
    }

    return true;
  }

  countPrefix(prefix) {
    if (!prefix.length) return null;
    if (!this.hasPrefix(prefix)) return 0;
    let root = this.root,
      totalCount = 0;

    for (let c of prefix) {
      totalCount = root.count[c];
      root = root.words[c];
    }

    return totalCount;
  }
}
