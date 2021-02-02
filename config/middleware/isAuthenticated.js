// Middleware for restricting routes if a user is not logged in
module.exports = function (req, res, next) {
    if (req.user) {
        return next();
    } else {
        return res.redirect("/signup");
    }
};
