import Ember from 'ember';

export default Ember.Component.extend({
    tagName:'li',
    classNameBindings:['todo.isCompleted:completed']
});
