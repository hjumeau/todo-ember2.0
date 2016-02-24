import Ember from 'ember';

export default Ember.Route.extend({
    todoService: Ember.inject.service('todo'),
    model(){
        return this.get('todoService').getAll();
    }
});
