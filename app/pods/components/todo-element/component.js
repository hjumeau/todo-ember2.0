import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        editTodo(){
            this.set('isEditing', true);
        }
    }
});
