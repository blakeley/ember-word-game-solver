/*global Ember */
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

test('/anagrams should display anagrams of given letters', function() {
  visit('/anagrams').
  fillIn('#letters', 'aemt');
  andThen(function(){
    equal(find('li').length, 2);
  });
});

test('/subanagrams should display subanagrams of given letters', function() {
  visit('/subanagrams').
  fillIn('#letters', 'aemt');
  andThen(function(){
    equal(find('li').length, 3);
  });
});
