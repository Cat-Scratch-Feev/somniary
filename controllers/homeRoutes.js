const router = require("express").Router();
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const { User } = require("../models");
const withAuth = require("../utils/auth");
const path = require("path");

// Get request /login
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");

    return;
  }

  res.render("login");
});

// GET request /   gets the home page if user is logged in
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      // order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("home", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/landing", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/home.html"));
});

// GET request /signup brings user to signup
router.get("/signup", (req, res) => {
  res.render("signup");
});

// GET request /settings navigates to profile settings page
router.get("/profilesettings", withAuth, function (req, res) {
  res.render("profilesettings");
});

// GET request /about
router.get("/about", withAuth, function (req, res) {
  res.render("about");
});

// GET request /journal brings user to all their dreams
router.get("/journal", withAuth, function (req, res) {
  res.render("journal");
});

// GET request /dreamlog create a new dream
router.get("/dreamlog", withAuth, function (req, res) {
  res.render("dreamlog");
});

router.get("/collective", withAuth, function (req, res) {
  res.render("collective");
});

module.exports = router;
