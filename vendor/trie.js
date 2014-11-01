var Trie = (function() {

  function Trie(){
    this.children = {};
    this.isWord = false;
    this.count = 0;
  }    

  Trie.prototype = {
    put: function(word) {
      word = word.toUpperCase();
      this.count += 1;
      if(word.length === 0) {
        this.isWord = true;
      } else {
        this.children[word[0]] = this.children[word[0]] || new Trie();
        this.children[word[0]].put(word.substring(1));
      }
    },

    puts: function(words) {
      var parent = this;
      words.forEach(function(word){
        parent.put(word);
      });
    },

    get: function(word) {
      word = word.toUpperCase();
      if(word.length === 0) {
        return this.isWord;
      } else {
        return this.children[word[0]] && this.children[word[0]].get(word.substring(1));
      }
    },

    anagrams: function(word) {
      return this.anagramsRecursive(word.letterCounts(), "", false);
    },

    subanagrams: function(word) {
      return this.anagramsRecursive(word.letterCounts(), "", true);
    },

    anagramsRecursive: function(letters, prefix, matchSubwords) {
      var keys = Object.keys(letters);
      var result = [];
      var total = 0;
      for (var i = 0; i < keys.length; i++) {
        var letter = keys[i];
        var count = letters[letter];
        total += count;
        if(count > 0 && this.children[letter]) {
          letters[letter] -= 1;
          prefix += letter;
          result = result.concat(this.children[letter].anagramsRecursive(letters, prefix, matchSubwords));
          prefix = prefix.slice(0, -1);
          letters[letter] += 1;
        }
      }

      if((total === 0 || matchSubwords) && this.isWord) {
        result.push(prefix);
      }

      return result;
    }
  };

  return Trie;
})();
