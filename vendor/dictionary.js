var Dictionary = (function() {

  function Dictionary(words){
    this.words = words;
    this.wordList = new WordList(words);
    window.wordList = this.wordList
    this.wordTrie = new Trie();
    this.transferToTrie();
  }

  Dictionary.prototype = {
    transferToTrie: function() {
      if(this.words.length > 0){
        this.wordTrie.puts(this.words.splice(0,10000));
        setTimeout(this.transferToTrie.bind(this), 1);
      }
    },

    anagrams: function(word){
      return this.wordList.anagrams(word).concat(this.wordTrie.anagrams(word));
    },

    subanagrams: function(word){
      return this.wordList.subanagrams(word).concat(this.wordTrie.subanagrams(word));
    },

    count: function() {
      return this.words.length + this.wordTrie.count;
    }

  }

  return Dictionary;
})();



