// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Todos.Todo = (function(_super) {

    __extends(Todo, _super);

    function Todo() {
      return Todo.__super__.constructor.apply(this, arguments);
    }

    Todo.prototype.title = DS.attr('string');

    Todo.prototype.isCompleted = DS.attr('boolean');

    return Todo;

  })(DS.Model);

  Todos.Todo.FIXTURES = [
    {
      id: 1,
      title: "Learn Ember.js",
      isCompleted: true
    }, {
      id: 2,
      title: "Go home",
      isCompleted: false
    }, {
      id: 3,
      title: "Profit!",
      isCompleted: false
    }
  ];

}).call(this);
