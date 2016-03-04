import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),

    getAll(){
        return this.get('store').findAll('todo');
    },
    create(title){
        var todo;
        todo = this.get('store').createRecord('todo', {title: title, isCompleted: false});
        todo.save();
    },
    toggleStatus(todoItem){
        todoItem.toggleProperty('isCompleted');
        todoItem.save();
    },
    remove(todoItem){
        todoItem.destroyRecord();
    },
    clearCompleted(){
        this.getAll().then((todos) => {
            var filteredTodos = todos.filterBy('isCompleted', true);
            filteredTodos.forEach((todo)=> todo.destroyRecord());
        });
    }
});
