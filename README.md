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
  
2. api 서버 구축

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
