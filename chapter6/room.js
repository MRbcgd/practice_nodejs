//public 방식
var socketio=require('socket.io')
var http=require('http')
var fs=require('fs')

var server=http.createServer(function(request,response){
  fs.readFile('roomhtml.html',function(error,data){
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
  var roomName=null

  socket.on('join',function(data){
    roomName=data
    socket.join(data)
  })
  socket.on('message',function(data){
    console.log(socket.rooms,'room')

    io.sockets.emit('message',data)//smart 이벤트 호출
  })
})

io.clients(function(error,clients){//clinet 정보 출력 이벤트 실행할떄 넣어서 실행
  if(error){
    throw error
  }

  console.log(clients,'clients')//클라이언트의 id와 접속중인 방 출력
})
