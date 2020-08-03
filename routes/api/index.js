const router = require("express").Router();
const tvRoutes = require("./tv");
const userRoutes = require("./user");

// TV routes
router.use("/", userRoutes);
router.use("/shows", tvRoutes);

module.exports = router;
