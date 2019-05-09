// Import Express
const express = require("express");
const bcrypt = require("bcryptjs");
const Users = require("../users/usersModel.js");
const tokenService = require("../auth/tokenService.js");

// Creates router for specific API route
const router = express.Router();

router.post("/register", async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(406).json({
      error: true,
      message: "Please include a username and password and try again."
    });
  }
  // Adding new user to database
  try {
    // Encryption of password
    const newUserInfo = req.body;
    const hash = bcrypt.hashSync(newUserInfo.password, 14); // Must be the same as the seeds
    newUserInfo.password = hash;
    const user = await Users.insert(newUserInfo);
    if (user) {
      const newUserProfile = await Users.find()
        .where({
          username: newUserInfo.username
        })
        .first();
      const token = tokenService.generateToken(user);
      res.status(200).json({
        message: "The account was created successfully.",
        token,
        user: {
          id: newUserProfile.id,
          username: newUserProfile.username
        }
      });
    } else {
      res.status(404).json({
        error: true,
        message: "The account could not be created in the database."
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: true, message: "There was a problem with your request." });
  }
});

router.post("/login", async (req, res) => {
  let creds = req.body;
  if (!creds.username || !creds.password) {
    return res.status(406).json({
      error: true,
      message: "Please include a username and password and try again."
    });
  }
  try {
    const user = await Users.find()
      .where({ username: creds.username })
      .first();
    if (user && bcrypt.compareSync(creds.password, user.password)) {
      const token = tokenService.generateToken(user);
      res.status(200).json({
        token,
        message: "The user was logged in successfully.",
        user: { id: user.id, username: user.username } // Expand with additional info as needed
      });
    } else {
      res.status(404).json({
        error: true,
        message: "The requested content does not exist."
      });
    }
  } catch (error) {
    res.status(400).json({
      error: true,
      message: "There was a problem with your request."
    });
  }
});

// Logout process is destroying token on front-end

module.exports = router;
