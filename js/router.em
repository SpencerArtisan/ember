window.Todos.Router.map ->
  @resource "todos",
      path: "/"

class Todos.TodosRoute extends Ember.Route
  model: ->
    @store.find "todo"
