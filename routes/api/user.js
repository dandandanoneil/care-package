const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");

// Matches with "/api/user"
router.route("/")
  .get(userController.getUser);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);
  
// Matches with "/api/user/signup"
router
  .route("/signup")
  .post(userController.signup);

// Matches with "/api/user/login"  
router
.route("/login")
.post(
  passport.authenticate("local"), (req, res) => {
    console.log("logged in:", req.user);
    res.json(req.user);
  }
);  

// Matches with "/api/user/logout"  
router
  .route("/logout")
  .get((req, res) => {
    console.log("logout");
    req.logout();
    res.redirect("/");
  });  
  
  module.exports = router;