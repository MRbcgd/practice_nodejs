// router 미들웨어 get, get의 params, app.all('*')
var express=require('express')
var app=express()

app.get('/a',function(request,response){
  response.send('<a href="/b">Go to B</a>')
})
app.get('/b',function(request,response){
  response.send('<a href="/a">Go to A</a>')
})

app.get('/a/:id',function(request,response){// a/123 이런식으로 입력 받으면 호출
  var id=request.params.id

  response.send('<h1>'+id+'</h1>')
})
app.all('*',function(request,response){//반드시 마지막, 위의 조건이 아니면 무조건 이 페이지 호출
  response.status(404).send('<h1>ERROR - Page Not Found</h1>')
})
app.listen(52273,function(){
  console.log('Server running at http://127.0.0.1.52273')
})
