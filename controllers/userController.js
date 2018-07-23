var User = require('../models/user');
var bcrypt = require('bcryptjs');

module.exports = {

    getAllUsers: function(params, callback) {
        User.find(params, function(err, users) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, users);
            return;
        });
    },

    createUser: function(params, callback) {
    
        const password = params.password;

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                if (err) {
                    callback(err, null);
                    return;
                }

                params.password = hash; 

                User.create(params, function(err, user) {
                    if (err) {
                        callback(err, null);
                        return;
                    }
                    callback(null, user);
                    return;
                });
            });
        });
    }
}
