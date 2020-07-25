const router = require("express").Router();
const tvControllers = require("../../controllers/tvControllers");

// Matches with "/api/tv"
router.route("/")
    .get(tvControllers.findAll)

// Matches with "/api/tv/:id"
router
    .route("/:id")
    .get(tvControllers.findById)

module.exports = router;