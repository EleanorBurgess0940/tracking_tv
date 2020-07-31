const router = require("express").Router();
const tvRoutes = require("./tv");
const userRoutes = require("./user.js");

// TV routes
router.use("/tv", tvRoutes);

router.use("/user", userRoutes);

module.exports = router;
