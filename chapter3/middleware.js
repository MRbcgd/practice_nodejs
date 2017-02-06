//미들웨어 기능
//미들웨어의 app.use()는 여러번 사용할 수 있다.
//미들웨어간에 재사용이 허용된다.
var express=require('express')
var app=express()

app.use(function(request,response,next){
    request.number1=10
    request.number2=20

    console.log('first middleware')
    next()
})
app.use(function(request,response,next){
    console.log('second middleware')
    next()
})
app.use(function(request,response,next){
    console.log('third middleware')
    console.log(request.number1 + request.number2)

    response.writeHead(200,{'Content-Type' : 'text/html'})
    response.end('<h1>Hello Word</h1>')
})

app.listen(52273,function(){
  console.log('Server running at 52273...')
})
