const db = require('../db-Config.js');


module.exports = {
    add,
    find, 
    findBy
};

function add(user) {
    return db('users')
      .insert(user, 'id')
      .then(ids => {
        const [id] = ids;
        return findById(id);
      });
  }

  function find() {
    return db('users').select('id', 'username', 'password');
  }

  function findBy(filter) {
    return db('users').where(filter);
  }