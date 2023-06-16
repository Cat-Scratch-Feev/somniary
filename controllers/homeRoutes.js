const router = require("express").Router();
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const { User, Dream, DreamTags, Tags} = require("../models");

const withAuth = require("../utils/auth");

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
    //Pull user data by username to use in templating
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      where:{username: req.session.username},
      // order: [["name", "ASC"]],
    });
    
    //Pull all dream data matching a user's id to use in journal feature
    const dreamData = await Dream.findAll({
      where: { user_id: req.session.user_id },
      include: {
        model: Tags,
        //through: { DreamTags } 
        through: { attributes: [] }
      }
    });
    const user = userData.map((project) => project.get({ plain: true }));
    
    const dreams = dreamData.map((dream) => dream.toJSON());

    //Get random dream from user dreams to use in reflection feature
    let randomIndex= Math.floor(Math.random() * dreamData.length);
    let randomDream = dreams[randomIndex];
   
    //Pass along essential data for rendering in template
    res.render("home", {
      user,
      dreams,
      randomIndex,
      randomDream,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET request /signup brings user to signup
router.get("/signup", (req, res) => {
  res.render("signup");
});

// GET request /settings navigates to profile settings page
router.get("/profilesettings", function (req, res) {
  res.render("profilesettings");
});

// GET request /about
router.get("/about", function (req, res) {
  res.render("about");
});

// GET request /journal brings user to all their dreams
router.get("/journal", async (req, res) => {
  try {
    //Pull user data to use in templating
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      where:{username: req.session.username},
      // order: [["name", "ASC"]],
    });
    //Pull all dream data matching user id
    const dreamData = await Dream.findAll({
      where: { user_id: req.session.user_id },
      include: {
        model: Tags,
        //through: { DreamTags } 
        through: { attributes: [] }
      }
    });
    const user = userData.map((project) => project.get({ plain: true }));
    
    const dreams = dreamData.map((dream) => dream.toJSON());
    
    //
    res.render("journal", {
      user,
      dreams,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET request /dreamlog create a new dream
router.get("/dreamlog", function (req, res) {
  res.render("dreamlog");
});

// GET request /calendar shows dreams sorted by date
router.get("/calendar", function (req, res) {
  res.render("calendar");
});

// GET request /collective shows dream collective, all dreams made sharable by users
router.get("/collective", async (req, res) => {
  try {
    //Pull user data to use in templating
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      where:{username: req.session.username},
      // order: [["name", "ASC"]],
    }); 
    //Pull all dream data matching user id
    const dreamData = await Dream.findAll({
      where: { is_shared : false },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
       {
        model: Tags,
        //through: { DreamTags } 
        through: { attributes: [] }
      },
    ],
    });
    const user = userData.map((project) => project.get({ plain: true }));
    
    const dreams = dreamData.map((dream) => dream.toJSON());
    
    //
    res.render("collective", {
      user,
      dreams,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
