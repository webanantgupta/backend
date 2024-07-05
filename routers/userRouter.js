const express = require("express");
const Model = require("../models/userModel");


const router = express.Router();

router.get("/getall", (req,res) => {

    res.send("response from userrouter");
});

module.exports = router;