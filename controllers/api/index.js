const router = require("express").Router();
const userRoutes = require("./userRoutes");
const dreamRoutes = require("./dreamRoutes");
const tagRoutes = require("./tagRoutes");

router.use('/users', userRoutes);
router.use('/dreams', dreamRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
