const React = require('react');
const Todo = require('./Todo');
// use deconstruction to get the variables out of this.props
// FIXME: ESLint
const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    { todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

module.exports = TodoList;
