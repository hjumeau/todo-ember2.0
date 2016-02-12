import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'header',
    classNames: ['header'],

    actions:{
        createTodo(){

            // Get the todo title set by the "New Todo" text field
            var title = this.get('title').trim();
            if (!title) {
                return;
            }

            this.attrs.createTodo(this.get('title'));

            // Clear the "New Todo" text field
            this.set('title', '');
        }
    }
});
