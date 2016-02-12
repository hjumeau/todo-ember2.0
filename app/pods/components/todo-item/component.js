import Ember from 'ember';

export default Ember.Component.extend({
    tagName:'li',
    classNameBindings:['todoItem.isCompleted:completed'],
    todoItem: Ember.computed.reads('todo'),
    actions:{
        toggleStatus(){
            this.get('todoItem').toggleProperty('isCompleted');
            this.attrs.updateTodo(this.get('todoItem'));
        },
        removeTodo(){
            this.attrs.removeTodo(this.get('todoItem'));
        }
    }
});
