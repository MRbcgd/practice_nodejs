var fs=require('fs')
var session=require('express-session')
var cookieParser=require('cookie-parser')
var bodyParser=require('body-parser')
var multipart=require('connect-multiparty')
var express=require('express')

var app=express()

app.use(multipart({uploadDir:__dirname + '/multipart'}))
app.use(cookieParser())
// app.use(session({
//   secret:'secret key',
//   resave:false,
//   saveUninitialized:true
// }))
app.use(bodyParser.urlencoded({extened:true}))//body-parser 미들웨어 사용

app.get('/',function(request,response){
  if(request.cookies.auth){
    fs.readFile('file_upload.html',function(error,data){
      if(error){
        return console.log(error)
      }
      response.send(data.toString())
    })
  } else{
    response.redirect('/login')
  }
})
app.post('/',function(request,response){
  var imageFile=request.files.image

  if(imageFile){
    var name=imageFile.name
    var path=imageFile.path
    var type=imageFile.type

//파일 업로드시 이름 최신화
    if(type.indexOf('image') != -1){//indexOf는 해당 글이 없을시 -1을 출력
      var outputPath=__dirname + '/multipart/' + Date.now() + '_' + name
      fs.rename(path,outputPath,function(error){//파일명 수정후 전송
        if(error){
          return console.log(error)
        }
        response.redirect('/')
      })
    } else{
      fs.unlink(path, function(error){//만약 파일 type이 image가 아니라면 에러 출력
        if(error){
          return console.log(error)
        }
        response.sendStatus(400)
      })
    }
  } else{
    response.sendStatus(404)
  }
})
app.get('/login',function(request,response){
  if(request.cookies.auth){//로그인 성공시
    response.redirect('/')
  } else{//로그인 실패시
    fs.readFile('login.html',function(error,data){
      if(error){
        return console.error();
      }
      response.send(data.toString())
    })
  }
})
app.post('/login',function(request,response){
  var username=request.body.username
  var password=request.body.password

  if(username == 'Roses4Queen' && password == '0000'){
    response.cookie('auth',true)

    response.redirect('/')
  } else{
    response.redirect('/login')
  }
})
app.all('*',function(request,response){
  response.status(404).send('<h1>ERROR - Page Not Found</h1>')
})

app.listen(52273,function(request,response){
  console.log('Server running at http://127.0.0.1:52273')
})
