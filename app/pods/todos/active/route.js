import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return {
            filter:(todo) => !todo.get('isCompleted')
        };
    }
});
