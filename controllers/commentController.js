const db = require("../models");

// Defining methods for the commentController
module.exports = {
  findAll: function (req, res) {
    db.Comment
      .find({})
      .sort({ created_at: "descending" })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByPostId: function (req, res) {
    db.Comment
      .find({ post: req.params.id })
      .populate("created_by")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Comment
      .create(req.body)
      .then(dbComment => db.Post.findByIdAndUpdate(dbComment.post, { $push: { comments: dbComment._id }, ref_user: dbComment.created_by, ref_comment: dbComment._id }, { new: true }))
      .then(dbPost => db.User.findByIdAndUpdate(dbPost.ref_user, { $push: { comments: dbPost.ref_comment } }))
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  update: function (req, res) {
    db.Comment
      .findOneAndUpdate({ _id: req.body._id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Comment
      .findOneAndRemove({ _id: req.params.id })
      .then(dbComment => db.Post.findByIdAndUpdate(dbComment.post, { $pull: { comments: dbComment._id }, ref_user: dbComment.created_by, ref_comment: dbComment._id }, { new: true }))
      .then(dbPost => db.User.findByIdAndUpdate(dbPost.ref_user, { $pull: { comments: dbPost.ref_comment } }))
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};
