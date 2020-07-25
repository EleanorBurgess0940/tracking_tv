const router = require("express").Router();
const tvRoutes = require("./tv");

// TV routes
router.use("/tv", tvRoutes);

module.exports = router;
