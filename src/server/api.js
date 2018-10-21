// src/server/api.js
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    // Fill in your code that:
   
   res.status(200).send('Hello World');
   });
   module.exports = router;