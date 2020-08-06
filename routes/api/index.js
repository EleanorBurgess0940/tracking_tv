const router = require("express").Router();
const userRoutes = require("./user");

// TV routes
router.use("/", userRoutes);

module.exports = router;
