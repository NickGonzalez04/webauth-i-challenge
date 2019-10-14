const db = require('../db-Config.js');


module.exports = {
    add, 
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


  function findBy(filter) {
    return db('users').where(filter);
  }