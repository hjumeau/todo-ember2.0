import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'section',
    classNames: ['todoapp'],
    todoService: Ember.inject.service('todo'),

    remainingTodos: Ember.computed.filterBy('todos', 'isCompleted', false),
    remainingTodosCount: Ember.computed.alias('remainingTodos.length'),

    init(){
        this._super();
        this.set('todos', this.get('todoService').getAll());
    },

    willRender(){
        var filteredTodos = this.get('filter') ? this.get('todos').filter(this.get('filter')) : this.get('todos');
        this.set('filteredTodos', filteredTodos);
    },

    actions: {
        createTodo(title){
            this.get('todoService').create(title);
        },
        toggleTodo(todoItem){
            this.get('todoService').toggleStatus(todoItem);
        },
        removeTodo(todoItem){
            this.get('todoService').remove(todoItem);
        },
        clearCompleted(){
            this.get('todoService').clearCompleted();
        }
    }
});
