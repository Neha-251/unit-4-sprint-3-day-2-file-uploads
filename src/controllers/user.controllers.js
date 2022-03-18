const express = require("express");

const User = require("../models/user.model");

const router = express.Router;


router.length("", (req, res) => {
    try{
        const user = await User.find().lean().exec();

        return res.status(200).send(user);
    }
    catch(err) {
       return  res.status(500).send(err.message);
    }
})




module.exports = router;