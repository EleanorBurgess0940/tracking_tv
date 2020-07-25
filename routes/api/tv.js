const router = require("express").Router();
const tvController = require("../../controllers/tvController");

// Matches with "/api/tv"
router.route("/")
    .get(tvController.findAll)
    .post(tvController.create);

// Matches with "/api/tv/:id"
router
    .route("/:id")
    .get(tvController.findById)
    .put(tvController.update)
    .delete(tvController.remove);

module.exports = router;