const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('./user-model');

const router = express.Router();


router.post('/register', (req, res)=> {
    let user = req.body;


    //hash the password 
    const hash = bcrypt.hashSync(user.password, 8);

    user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
})


router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = router;







