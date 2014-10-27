import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ["application"],
  words: Ember.computed.alias('controllers.application.words'),

  anagrams: function() {
    return this.get('words').anagrams(this.get('letters'));
  }.property('words', 'letters'),

  subwords: function() {
    return this.get('words').subwords(this.get('letters'));
  }.property('words', 'letters'),


});

String.prototype.letterHash = function () {
    return this.toUpperCase().split('').sort().join('');
};
