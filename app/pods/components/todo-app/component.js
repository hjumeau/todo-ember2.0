import Ember from 'ember';

export default Ember.Component.extend({

    todoService: Ember.inject.service('todo'),

    willRender(){
        var filteredTodos = this.get('filter') ? this.get('todos').filter(this.get('filter')) : this.get('todos');
        this.set('filteredTodos', filteredTodos);
    },

    remainingTodos: Ember.computed.filterBy('todos', 'isCompleted', false),

    remainingTodosCount: Ember.computed.alias('remainingTodos.length'),

    actions: {
        createTodo(title){
            this.get('todoService').create(title);
        },
        updateTodo(todoItem){
            this.get('todoService').update(todoItem);
        },
        removeTodo(todoItem){
            this.get('todoService').remove(todoItem);
        },
        clearCompleted(){
            this.get('todoService').clearCompleted();
        }
    }
});
