//미들웨어 app.use(), use에 매개변수로 쓰이는 함수
var express=require('express')
var app=express()

app.use(function(request,response){//미들웨어 use() 메소드에 쓰여지는 매개변수를 뜻함
  response.writeHead(200,{'Content-Type' : 'text/html'})
  response.end('<h1>Hello Word</h1>')
})

app.listen(52273,function(){
  console.log('Server running at 52273...')
})
