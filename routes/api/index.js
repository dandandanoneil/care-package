const router = require("express").Router();
const postRoutes = require("./posts");
const commentRoutes = require("./comments");
const userRoutes = require("./user");

// Post routes
router.use("/posts", postRoutes);

// Comment routes
router.use("/comments", commentRoutes);

// User routes
router.use("/user", userRoutes);

module.exports = router;
