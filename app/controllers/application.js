import Ember from 'ember';

export default Ember.Controller.extend({

  wordCount: function() {
    return this.get("words").count;
  }.property("words")

});
