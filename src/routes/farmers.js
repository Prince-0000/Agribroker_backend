// backend/src/routes/farmers.js
const express = require("express");
const router = express.Router();
const checkJwt = require("../middleware/authMiddleware");

router.get("/", checkJwt, async (req, res) => {
  const userId = req.auth.sub
  res.json({ message: `Hello ${userId}, you are authenticated.` });
});

module.exports = router;
