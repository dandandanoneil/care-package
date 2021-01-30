const router = require("express").Router();
const postRoutes = require("./posts");
const commentRoutes = require("./comments");

// Post routes
router.use("/posts", postRoutes);

// Comment routes
router.use("/comments", postRoutes);

module.exports = router;
