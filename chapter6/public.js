//public 방식
var socketio=require('socket.io')
var http=require('http')
var fs=require('fs')

var server=http.createServer(function(request,response){
  fs.readFile('HTMLPage.html',function(error,data){
    if(error){
      return console.log(error)
    }

    response.writeHead(200,{'Content-Type' : 'text/html'})
    response.end(data)
  })
}).listen(52273,function(){
  console.log('Server running at http://127.0.0.1:52273');
})

var io=socketio.listen(server)//서버에 연결
io.sockets.on('connection',function(socket){//connection 이벤트를 설정
  socket.on('rint',function(data){
    console.log('client send data : ',data)

    io.sockets.emit('smart',data)//smart 이벤트 호출
  })
})
