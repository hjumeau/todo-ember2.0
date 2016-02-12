import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),

    willRender(){
        var filteredTodos = this.get('filter') ? this.get('todos').filter(this.get('filter')) : this.get('todos');
        this.set('filteredTodos', filteredTodos);
    },

    remainingTodos: Ember.computed.filterBy('todos', 'isCompleted', false),

    remainingTodoCount: Ember.computed.alias('remainingTodos.length'),

    actions: {
        createTodo(title){
            var todo;

            // Create the new Todo model
            todo = this.get('store').createRecord('todo', {
                title: title,
                isCompleted: false
            });
            todo.save();
        },
        updateTodo(todoItem){
            var foundTodo = this.get('todos').findBy('id', todoItem.get('id'));
            foundTodo.setProperties({
                title: todoItem.get('title'),
                isCompleted: todoItem.get('isCompleted')
            });
            foundTodo.save();
        },
        removeTodo(todoItem){
            var foundTodo = this.get('todos').findBy('id', todoItem.get('id'));
            foundTodo.destroyRecord();
        },
        clearCompleted(){
            var filteredTodos = this.get('todos').filterBy('isCompleted', true);
            filteredTodos.forEach((todo)=> todo.destroyRecord());
        }
    }
});
