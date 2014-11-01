String.prototype.letterCounts = function () {
  var characters = this.toUpperCase().split('');
  var hash = {};
  for (var i = 0; i < characters.length; i++) {
    var character = characters[i];
    hash[character] = hash[character] || 0;
    hash[character] += 1;
  }

  return hash;
};

String.LETTER_HASH = {'A': 2, 'B': 3, 'C': 5, 'D': 7, 'E': 11,
'F': 13, 'G': 17, 'H': 19, 'I': 23, 'J': 29, 'K': 31, 'L': 37,
'M': 41, 'N': 43, 'O': 47, 'P': 53, 'Q': 59, 'R': 61, 'S': 67,
'T': 71, 'U': 73, 'V': 79, 'W': 83, 'X': 89, 'Y': 97, 'Z': 101}
String.prototype.letterHash = function () {
  var product = 1
  var characters = this.toUpperCase().split('');
  for(var i = 0; i < characters.length; i++){
    product *= String.LETTER_HASH[characters[i]]
  }
  return product;
};


String.prototype.letters = function () {
  return this.toUpperCase().split('').sort().join('');
};


var WordList = (function() {

  function WordList(words){
    this.words = words;
  }

  WordList.prototype = {
    anagrams: function(tiles){
      result = []
      letterHash = tiles.letterHash()
      for(var i = 0; i < this.words.length; i++){
        if(this.words[i].length == tiles.length){
          if(letterHash == this.words[i].letterHash()){
            result.push(this.words[i]);
          }
        }
      }
      return result;
    },

    subanagrams: function(tiles){
      result = []
      letterHash = tiles.letterHash()
      for(var i = 0; i < this.words.length; i++){
        if(this.words[i].length <= tiles.length){
          if(letterHash % this.words[i].letterHash() == 0){
            result.push(this.words[i]);
          }
        }
      }
      return result;
    }
  }

  return WordList;
})();
