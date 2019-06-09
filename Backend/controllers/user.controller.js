const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    console.log('inside register function.');

    var user = new User();
    user.userRole = req.body.userRole;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log(err);
            if (err.code == 11000) {
                res.status(422).send(['Duplicate email address found']);
            }
            else {
                return next(err);
            }
        }
    });
}

module.exports.authenticate = (req, res, next) => {

    // Call for passport authentication
    passport.authenticate('local', (err, user, info) => {

        // error from passport middleware
        if (err) return res.status(400).json(err);

        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });

        // unknown user or wrong password
        else
            return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) => {
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found!' });
            else
                return res.status(200).json({ status: true, user: _.pick(user,['userRole','firstName','email']) });
        }
    );
}