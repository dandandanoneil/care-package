const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/posts"
router.route("/")
  .post(postController.create)
  .get(postController.findAll)
  .put(postController.update);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postController.findById)
  .delete(postController.remove);

module.exports = router;
