const db = require("../models");

// Defining methods for the commentController
module.exports = {
  findAll: function (req, res) {
    db.Comment
      .find({})
      .sort({ date: -1 })
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
      .then(dbModel => {
        return db.Post.findByIdAndUpdate(dbModel.post, { $push: { comments: dbModel._id } });
        // db.Post.findByIdAndUpdate(dbModel.post, { $push: { comments: dbModel._id } });
        // db.User.findByIdAndUpdate(dbModel.created_by, { $push: { comments: dbModel._id } });
      })
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  update: function (req, res) {
    db.Comment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Comment
      .findOneAndRemove({ _id: req.params.id })
      .then(dbModel => {
        return db.Post.findByIdAndUpdate(dbModel.post, { $pull: { comments: dbModel._id } });
        // db.Post.findByIdAndUpdate(dbModel.post, { $pull: { comments: dbModel._id } });
        // db.User.findByIdAndUpdate(dbModel.created_by, { $pull: { comments: dbModel._id } });
      })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};
