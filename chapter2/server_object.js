var server=require('http').createServer(function(request,response){
  response.writeHead(200,{'Content-Type':'text/html'})
  response.end('<h1>Hello World</h1>')
}).listen(52273)

server.on('request',function(){
  console.log('request on!')
})
server.on('connection',function(){
  console.log('connection on!')
})
server.on('close',function(){
  console.log('close on!')
})
