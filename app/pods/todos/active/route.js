import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return {
            todos: this.modelFor('todos'),
            filter:(todo) => !todo.get('isCompleted')
        };
    }
});
