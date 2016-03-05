const db = require('../lib/db');
const Todo = module.exports;

Todo.create = (attrs) => {
  return db('todos').insert(attrs, ['id', 'text', 'completed'])
  .then((response) => {
    return response[0];
  })
  .catch((error) => {
    console.log('ERROR on Todo create', error);
    throw error;
  });
};

Todo.read = () => {
  return db('todos').select()
  .then((response) => {
    return response;
  })
  .catch((error) => {
    console.log('ERROR', error);
    throw error;
  });
};

Todo.update = (attrs) => {
	
};

Todo.remove = (attrs) => {
	
};
