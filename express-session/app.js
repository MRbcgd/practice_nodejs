// express-session : 세션 기능 수행
var session=require('express-session')
var express=require('express')
var app=express()

app.use(session({
  secret:'secret key',
  resave:false,
  saveUninitialized:true
}))
app.use(function(request,response){
  request.session.now=(new Date().toUTCString())

  response.send(request.session)
})

app.listen(52273,function(){
  console.log('Server running at 52273...')
})
