//connect-multiparty 미들웨어,enctype를 multipart/form-data로 보낼때 사용
var fs=require('fs')
var multipart=require('connect-multiparty')//connect-multiparty 미들웨어
var express=require('express')

var app=express()

app.use(multipart({uploadDir:__dirname + '/multipart'}))//경로지정

app.get('/',function(reqeust,response){
  fs.readFile('htmlpage.html',function(error,data){
    if(error){
      return console.log(error)
    }
    response.send(data.toString())
  })
})
app.post('/',function(request,response){
  console.log(request.body)
  console.log(request.files)//파일정보 출력

  response.redirect('/')
})


app.listen(52273,function(){
  console.log('Server running at 52273...')
})
