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

//api 호출 message
router.get('/test', function(req, res){
  res.status(200).json(
    {
      "message" : "test"
    }
  );
});

//post 호출
router.post('/post_test', function(req,res){
  const user_message = req.body.message;
  res.status(200).json(
    {
      "message" : user_message
    }
  );
});

module.exports = router;
