//static 미들웨어 : express에서 제공해줌.
var express=require('express')
var app=express()

app.use(express.static(__dirname + '/public'))//파일저장 경로를 static하게 해준다
app.use(function(request,response){
  response.writeHead(200,{'Content-Type' : 'text/html'})
  response.end('<img src="/pchpch.jpg" width="100%">')
})

app.listen(52273,function(){
  console.log('Server running at 52273...')
})
