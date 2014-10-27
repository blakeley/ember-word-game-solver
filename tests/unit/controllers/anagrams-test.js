/*global Trie:false */
import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:anagrams', 'AnagramsController', {
  needs: ['controller:application']
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

test('anagramsController correctly gets anagrams', function() {
  var anagramsController = this.subject(),
      applicationController = anagramsController.get('controllers.application'),
      t = new Trie();
  //someThing.set('foo', 'baz');
  t.put("sword");
  t.put("words");
  t.put("dowry");
  applicationController.set("words", t);
  anagramsController.set("letters", "dorsw");
  var anagrams = anagramsController.get('anagrams');
  equal(anagrams.length, 2);
});
