import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),

    getAll(){
        return this.get('store').findAll('todo');
    },
    create(title){
        var todo;
        todo = this.get('store').createRecord('todo', {
            title: title,
            isCompleted: false
        });
        todo.save();
    },
    update(todoItem){
        var promiseTodo = this.get('store').findRecord('todo', todoItem.get('id'));
        promiseTodo.then((todo) => {
            todo.setProperties({
                title: todoItem.get('title'),
                isCompleted: todoItem.get('isCompleted')
            });
            todo.save();
        });
    },
    remove(todoItem){
        var promiseTodo = this.get('store').findRecord('todo', todoItem.get('id'));
        promiseTodo.then((todo) => {
            todo.destroyRecord();
        });
    },
    clearCompleted(){
        var promiseTodos = this.getAll();
        promiseTodos.then((todos) => {
            var filteredTodos = todos.filterBy('isCompleted', true);
            filteredTodos.forEach((todo)=> todo.destroyRecord());
        });
    }
});
