import {
  moduleFor,
  test
} from 'ember-qunit';
import startApp from '../helpers/start-app'; // change this due to your folder
var App;

module('Integration - Anagrams', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, "destroy");
  }
});

test('test word trie', function() {
  visit('/anagrams');
  fillIn('input#letters', 'aemt');
  andThen(function(){
    equal(find('li').length, 2);
  });
});
