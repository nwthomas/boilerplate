const express = require("express");
const Users = require("./usersModel.js");
const bcrypt = require("bcryptjs");

// Creates router for specific API route for import in server.js
const router = express.Router();

// Get all users request
router.get("/", async (req, res) => {
  try {
    const users = await Users.find().select("id", "username");
    if (users.length) {
      res.status(200).json({
        message: "The users were found in the database",
        users
      });
    } else {
      res
        .status(404)
        .json({ message: "The users could not be found in the database." });
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error retrieving the users from the database.",
      error
    });
  }
});

// Get users by id request
router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id).select("id", "username");
    if (user) {
      res.status(200).json({
        message: "The user was retrieved successfully.",
        user
      });
    } else {
      res
        .status(404)
        .json({ message: "The user could not be found in the database." });
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error retrieving the users from the database.",
      error
    });
  }
});

// Create user request is a duplicate of register but is here in case it's needed
// router.post("/", async (req, res) => {
//   if (!req.body.name) {
//     return res
//       .status(404)
//       .json({ message: "Please include a name and try again." });
//   }
//   try {
//     const newUser = await User.insert(req.body);
//     if (newUser) {
//       res.status(200).json({
//         message: "The new user was created in the database",
//         newUser
//       });
//     } else {
//       res
//         .status(404)
//         .json({ message: "The user could not be created in the database." });
//     }
//   } catch (error) {
//     res.status(500).json({
//       message: "There was an error creating the user in the database."
//     });
//   }
// });

// Update individual user request
router.put("/:id", async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(404).json({ message: "Please include a name and try again." });
  }
  try {
    const newUserInfo = req.body;
    const hash = bcrypt.hashSync(newUserInfo.password, 14);
    newUserInfo.password = hash;
    const user = await Users.update(req.params.id, newUserInfo);
    if (user) {
      const users = await Users.find().where({
        username: newUserInfo.username
      });
      res.status(200).json({
        message: "The user was updated successfully.",
        numUpdate: user,
        users
      });
    } else {
      res
        .status(404)
        .json({ message: "The user could not be updated in the databse." });
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error updating the user in the database.",
      error
    });
  }
});

// Delete indiviudal user request
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await Users.remove(req.params.id);
    if (deletedUser) {
      res.status(200).json({
        message: "User was deleted successfully.",
        numDeleted: deletedUser
      });
    } else {
      res
        .status(404)
        .json({ message: "The user could not be deleted in the database." });
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error while deleting the user in the database.",
      error
    });
  }
});

module.exports = router;
