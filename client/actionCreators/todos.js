require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

function requestTodos() {
  return {
    type: 'REQUEST_TODOS',
  };
}

function requestNewTodo(text) {
  return {
    type: 'REQUEST_NEW_TODO',
    id: 'creating',
    text,
  };
}

function receiveTodos(todos) {
  return {
    type: 'RECEIVE_TODOS',
    todos,
  };
}

function fetchTodos(currentTime) {
  return dispatch => {
    dispatch(requestTodos(currentTime));
    return fetch('/api/todos').then((response) => {
      return response.json();
    }).then(response => {
      dispatch(receiveTodos(response.todos));
    }).catch((error) => {
      console.log(error);
    });
  };
}


function receiveNewTodo(id) {
  return {
    type: 'RECEIVE_NEW_TODO',
    id,
  };
}

function addTodo(value) {
  const todo = {
    text: value,
  };
  return dispatch => {
    dispatch(requestNewTodo(value));
    return fetch('/api/todos', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then((response) => {
      return response.json();
    }).then(response => {
      dispatch(receiveNewTodo(response.todo.id));
    });
  };
}

function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
}

module.exports = {
  addTodo,
  requestNewTodo,
  receiveNewTodo,
  receiveTodos,
  toggleTodo,
  fetchTodos,
};

