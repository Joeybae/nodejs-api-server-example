# nodejs-api-server-example

참고 : https://hanswsw.tistory.com/20?category=766598 [Han's Dev Log]

------------------------------

1. 사전작업

  - express 설치
  
        # npm install -g express-generator
  
  - test app 생성
  
        # express testapp
  
  - 실행
  
        # cd testapp
  
        # npm install
  
        # npm start
  
2. api 서버 - get

  - routes/index.js 변경
  
        var express = require('express');
        var router = express.Router();

        //api 호출 test
        router.get('/', function(req, res){
          res.status(200).json(
            {
              "success" : true
            }
          );
        });

        module.exports = router;
  
  - 실행
  
        # npm start
  
  - 결과
  
        {"success":true}

3. api 서버 - post

  - post 호출 - routes/index.js
  
        //post 호출
        router.post('/post_test', function(req,res){
          const user_message = req.body.message;
          res.status(200).json(
            {
              "message" : user_message
            }
          );
        });

  - postman을 통한 message 작성
  
        {
          "message":"HI"
        }

  - 결과
  
        {
            "message": "HI"
        }
  
4. controller

  - controllers/index.js 생성
  
        function basicAPI (req, res){
          res.status(200).json(
            {
              "success" : true
            }
          );
        };

        function testAPI (req, res){
          res.status(200).json(
            {
              "message" : "test"
            }
          );
        };

        function postTestAPI (req,res){
          const user_message = req.body.message;
          res.status(200).json(
            {
              "message" : user_message
            }
          );
        };

        module.exports = {
          basicAPI: basicAPI,
          testAPI: testAPI,
          postTestAPI: postTestAPI,
        }
        
  - body-parser install
  
  # npm install body-parser --save
  
  - body-parser load - app.js
  
        ...
        var bodyParser = require('body-parser')
        ...
        app.use(bodyParser().json())
        ...
        
