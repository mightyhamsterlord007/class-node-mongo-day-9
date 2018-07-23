var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('HELLO CLASS');
});

router.post('/', function(req, res, next) {
  userController.createUser(req.body, function(err, user) {
    if (err) {
      res.json({
        message: 'Fail',
        error: err
      });
      return;
    }
    res.json({
      message: 'Success',
      data: user
    });
    return;
  });
});

module.exports = router;
