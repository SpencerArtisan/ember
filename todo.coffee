class Todos.Todo extends DS.Model
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')

Todos.Todo.FIXTURES = [
  id: 1
  title: "Learn Ember.js"
  isCompleted: true
,
  id: 2
  title: "Go home"
  isCompleted: false
,
  id: 3
  title: "Profit!"
  isCompleted: false
]
