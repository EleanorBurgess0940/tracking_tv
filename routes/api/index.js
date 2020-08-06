const router = require("express").Router();
//const tvRoutes = require("./tv");
const userRoutes = require("./user");

// TV routes
router.use("/", userRoutes);
//router.use("/show", tvRoutes);

module.exports = router;
