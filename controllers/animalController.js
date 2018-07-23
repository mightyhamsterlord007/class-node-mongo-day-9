var Animal = require('../models/animal');

module.exports = {

    getAnimals: function(params, callback) {
        Animal.find(params, function(err, animals) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, animals);
            return;
        });
    },

    createAnimal: function(params, callback) {
        Animal.create(params, function(err, animal) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, animal);
            return;
        });
    }
}
