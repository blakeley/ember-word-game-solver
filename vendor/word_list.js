String.prototype.letters = function () {
  return this.toUpperCase().split('').sort().join('');
};


var WordList = (function() {

  function WordList(words){
    this.words = words;
  }

  WordList.prototype = {
    anagrams: function(word){
      letters = word.letters()
      result = []
      for(var i = 0; i < this.words.length; i++){
        if(this.words[i].letters() == letters) {
          result.push(this.words[i]);
        }
      }
      return result;
    }
  }

  return WordList;
})();
