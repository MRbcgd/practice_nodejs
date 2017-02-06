// 파일업로드시 파일명 수정 및 파일찾기
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


app.listen(52273,function(){
  console.log('Server running at 52273...')
})
