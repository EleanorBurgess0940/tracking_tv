const router = require("express").Router();
const tvRoutes = require("./tv");

// Book routes
router.use("/tv", tvRoutes);

module.exports = router;
