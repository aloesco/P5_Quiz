var express = require('express');
var router = express.Router();
const control = require("../controlador/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/credits', function(req, res, next) {
    res.render('credits', { title: 'Credits' });
});

router.get('/quizzes', control.index);

module.exports = router;
