const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('./user-model');
const restricted = require('../auth/restricted-middleware');

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
            // Saves username into the session - server access this username 
            req.session.username = user.username;

            // Can see the session saving 
            console.log('session', req.session);
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          res.status(401).json({ message: 'YOU SHALL NOT PASS' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });


  router.get('/restricted/users', restricted, (req, res) => {

    console.log('username', req.session.username);
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.status(404).json({ message: "You shall not pass!" ,err}));
  });




module.exports = router;







