var fs=require('fs')
var bodyParser=require('body-parser')//body-parser 미들웨어
var cookieParser=require('cookie-parser')
var express=require('express')
var app=express()

app.use(cookieParser())
app.use(bodyParser.urlencoded({extened:true}))//body-parser 미들웨어 사용

app.get('/',function(request,response){
  if(request.cookies.auth){//쿠키 정보가 있다면
    response.send('Login Sucess')
  } else{
    response.redirect('/login')
  }
})
app.get('/login',function(request,response){
  fs.readFile('login.html',function(error,data){
    if(error){
      return console.log(error)
    }
    response.send(data.toString())
  })
})
app.post('/login',function(request,response){
  var username=request.body.username
  var password=request.body.password

  console.log(username,password)
  console.log(request.body)

  if(username == 'root' && password == '0000'){
    response.cookie('auth',true)
    response.redirect('/')
  } else{
    response.redirect('/login')
  }
})

app.listen(52273,function(){
  console.log('Server running at 52273...')
})
