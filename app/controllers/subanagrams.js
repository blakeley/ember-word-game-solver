import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ["application"],
  words: Ember.computed.alias('controllers.application.words'),

  subanagrams: function() {
    return this.get('words').subanagrams(this.get('letters'));
  }.property('words', 'letters'),

});
