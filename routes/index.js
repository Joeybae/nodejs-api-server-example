var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//api 호출 test
router.get('/', function(req, res){
  res.status(200).json(
    {
      "success" : true
    }
  );
});

module.exports = router;
