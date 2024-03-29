/*global Dictionary */
import Ember from 'ember';
import ENV from 'words/config/environment';

export default Ember.Route.extend({

  setupController: function(controller, model) {
    model = null;
    this.setWords(controller);
  },

  setWords: function(controller) {
    var words = new Dictionary([]);
    controller.set("words", words);
    if(ENV.environment === "test"){ // unfortunately, this is the only way currently to stub this method
      var lines = ["team","mate","null", "mat"];
      var dictionary = new Dictionary(lines);
      controller.set("words", dictionary);
    } else { // ideally, we would use fixtures, but ember-cli does not currently support $.mockjax
      Ember.$.get("https://s3.amazonaws.com/blakeley-cors/sowpods.txt", function(data) {
        Ember.run(function(){
          var dictionary = new Dictionary(data.split("\n"));
          controller.set("words", dictionary);
        });
      });    
    }
  },
});

