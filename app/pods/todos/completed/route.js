import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.modelFor('todo').filterBy('isCompleted', true);
    }
});
