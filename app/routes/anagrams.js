import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller, model) {
    model = null;
    controller.set('letters', '');
  }

});
