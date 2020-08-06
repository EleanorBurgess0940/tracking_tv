const router = require("express").Router();
const tvControllers = require("../../controllers/tvControllers");

router
  .route("/:id")
  .get(tvControllers.findById)
  .put(tvControllers.update)
  .delete(tvControllers.remove);

module.exports = router;
