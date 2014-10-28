var Dictionary = (function() {

  function Dictionary(words){
    this.words = words;
    this.wordList = new WordList(words);
    this.wordTrie = new Trie();
    this.transferToTrie();
  }

  Dictionary.prototype = {
    transferToTrie: function() {
      console.log("transferring");
      this.wordTrie.puts(this.words.splice(0,10000));
      if(this.words.length > 0){
        setTimeout(this.transferToTrie.bind(this), 1);
      }
    },

    anagrams: function(word){
      return this.wordList.anagrams(word).concat(this.wordTrie.anagrams(word));
    },

    count: function() {
      return this.words.length + this.wordTrie.count;
    }

  }

  return Dictionary;
})();



