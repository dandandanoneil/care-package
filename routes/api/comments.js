const router = require("express").Router();
const commentController = require("../../controllers/commentController");

// Matches with "/api/comments"
router.route("/")
  .post(commentController.create)
  .get(commentController.findAll)
  .put(commentController.update);

// Matches with "/api/comments/:id"
router
  .route("/:id")
  .get(commentController.findByPostId)
  .delete(commentController.remove);

module.exports = router;