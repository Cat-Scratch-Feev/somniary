const router = require("express").Router();
const { User, Dream } = require("../../models");

// The `/api/users` endpoint
router.get("/", async (req, res) => {
  // find all users
  try {
    const userData = await User.findAll({
      include: [{ model: Dream }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST /api/users   Creating user
router.post("/", async (req, res) => {
  // create a new user
  try {
    const userData = await User.create({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST /api/users/login   Logging in
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

// Post /api/users/logout   Logout routes
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// GET /api/:id   Finding user
router.get("/:id", async (req, res) => {
  // find one user by its `id` value
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Dream }],
    });
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT /api/users/:id Updating user
router.put("/:id", async (req, res) => {
  // update a user by its `id` value
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE /api/users/:id Delete user by ID
router.delete("/:id", async (req, res) => {
  // delete a user by its `id` value
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
