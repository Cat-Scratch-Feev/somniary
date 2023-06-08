const router = require("express").Router();
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const { User } = require("../../models");

// POST request for logging in
router.post("/login", async (req, res) => {
  try {
    // identifier variable to store username and emails together
    const { identifier, password } = req.body;
    // Verify login Credentials
    const userData = await User.findOne({
      where: {
        [Op.or]: [{ email: identifier }, { username: identifier }],
      },
    });

    // Incorrect login
    if (!userData) {
      res.status(400).json({ message: "Incorrect email or password" });
      return;
    }

    // Verify correct password
    const validPassword = await bcrypt.compare(password, userData.password);

    // Incorrect Password
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email or password" });
      return;
    }

    // Creates a session for logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are logged in" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Signup routes
router.post("/register", async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // Creates new user
    const newUser = await User.create({
      email,
      password,
      username,
    });

    res
      .status(201)
      .json({ user: newUser, message: "User created successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout routes
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
