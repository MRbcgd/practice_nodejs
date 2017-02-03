//createServer()에 콜백을 통해 fs.readFile 호출
var fs=require('fs')
require('http').createServer(function(request,response){
  fs.readFile('htmlpage.html',function(error,data){
    if(error){
      return console.log(error)
    }
    response.writeHead(200,{'Content-Type':'text/html'})
    response.end(data)
  })
}).listen(52273,function(){
    console.log('running..http://127.0.0.1:52273/')
})

require('http').createServer(function(request,response){
  fs.readFile('picture.jpg',function(error,data){
    if(error){
      return console.log(error)
    }
    response.writeHead(200,{'Content-Type':'image/jpg'})//jpg파일
    response.end(data)
  })
}).listen(52274,function(){
    console.log('running..http://127.0.0.1:52274/')
})

require('http').createServer(function(request,response){
  fs.readFile('music.mp3',function(error,data){
    if(error){
      return console.log(error)
    }
    response.writeHead(200,{'Content-Type':'audio/mp3'})//mp3파일
    response.end(data)
  })
}).listen(52275,function(){
    console.log('running..http://127.0.0.1:52275/')
})
