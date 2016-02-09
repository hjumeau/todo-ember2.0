import Ember from 'ember';

export default Ember.Component.extend({

    store:Ember.inject.service(),

    actions:{
        createTodo(){
            var todo, title;

            // Get the todo title set by the "New Todo" text field
            title = this.get('newTitle').trim();
            if (!title) {
                return;
            }

            // Create the new Todo model
            todo = this.get('store').createRecord('todo', {
                title: title,
                isCompleted: false
            });
            todo.save();

            // Clear the "New Todo" text field
            this.set('newTitle', '');
        }
    }
});
