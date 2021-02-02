const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// Matches with "/api/user/login"
router
  .route("/login")
  .post(userController.login)

// Matches with "/api/user/logout"
router
  .route("/logout")
  .get(userController.logout)

// Matches with "/api/user/signup"
router
  .route("/signup")
  .post(userController.signup)

  module.exports = router;