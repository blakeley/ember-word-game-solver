/*global Trie:false */
import Ember from 'ember';
import ENV from 'words/config/environment';

export default Ember.Route.extend({

  setupController: function(controller, model) {
    model = null;
    this.setWords(controller);
  },

  setWords: function(controller) {
    var dictionary = new Trie();
    var words = new Trie();
    controller.set("words", words);
    if(ENV.environment == "test"){ // unfortunately, this is the only way currently to stub this method
      var lines = ["team","mate","null"]
      for(var i = 0; i < lines.length; i++){
        words.put(lines[i]);
      }
      controller.set("words", words);
    } else { // ideally, we would use fixtures, but ember-cli does not currently support $.mockjax
      Ember.$.get("https://s3.amazonaws.com/blakeley-cors/sowpods.txt", function(data) {
        Ember.run(function(){
          var words = new Trie();
          var lines = data.split("\n");
          function iteration() {
            words.puts(lines.splice(0,10000));
            if(lines.length > 0){
              setTimeout(iteration, 1);
            } else {
              controller.set("words", words);
            }
          }
          iteration()
        });
      });    
    }
  },
});
