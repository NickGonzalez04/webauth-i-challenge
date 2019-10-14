const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();


router.post('/register', (req, res)=> {
    let user = req.body;


    //hash the password 
    const hash = bcrypt.hashSync(user.password, 8);

})




module.exports = router;







