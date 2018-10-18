// src/server/api.js
const express = require("express");
const router = express.Router();
const tictactoe = require("./../logic/tictactoe");
router.get("/tictactoe", (req, res) => {
    // Fill in your code that:
   
    // 1. set's the status code to 200
   res.status(200).send("hello World of");
    // 2. and returns an object with the greeting
    // Hint: `req.params.name`
   });
   module.exports = router;