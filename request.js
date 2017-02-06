//request객체의 query 사용법 
var express=require('express')//express 모듈
var app=express()

app.use(function(request,response){
  var name=request.query.name//query는 url의 ?로 받아올수있음.
  var pwd=request.query.pwd

  response.send('<h1>name : '+name+' pwd : '+pwd+'</h1>')
})

app.listen(52273,function(){
  console.log('Server running at 52273...')
})
