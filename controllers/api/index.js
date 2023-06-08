const router = require("express").Router();
const userRoutes = require("./userRoutes");
const dreamRoutes = require("./dreamRoutes");
const tagRoutes = require("./tagRoutes");

router.use("/users", categoryRoutes);
router.use("/dreams", productRoutes);
router.use("/tags", tagRoutes);

module.exports = router;
