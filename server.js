// http모듈의 server 객체의 createServer 메소드, listen 메소드,close() 메소드
// createServer() : 서버객체 생성
// listen() : 서버와 연결
// clsoe() : 서버와 연결해제
var http=require('http')//http 모듈

var server=http.createServer();//서버객체 생성

server.listen(52273,function(){//서버와 연결
  console.log('connected..http://127.0.0.1:52273')
});

var test=function(){
  server.close(function(){//서버 연결해제
    console.log('disconnected..http://127.0.0.1:52273')
  })
}

setTimeout(test,10000)
