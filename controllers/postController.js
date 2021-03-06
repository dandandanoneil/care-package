const db = require("../models");

// Defining methods for the postController
module.exports = {
  findAll: function (req, res) {
    db.Post
      .find(req.query)
      .populate("created_by")
      .sort({ created_at: "descending" })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Post
      .findById(req.params.id)
      .populate("created_by")
      .populate("comments")
      .populate({
        path: "comments",
        populate: { path: "created_by" }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Post
      .create(req.body)
      .then(dbPost => db.User.findByIdAndUpdate(dbPost.created_by, { $push: { posts: dbPost._id }, ref_post: dbPost._id }))
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Post
      .findOneAndUpdate({ _id: req.body._id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Post
      .findOneAndRemove({ _id: req.params.id })
      .then(dbModel => db.User.findByIdAndUpdate(dbModel.created_by, { $pull: { posts: dbModel._id } }))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
