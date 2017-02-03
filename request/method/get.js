//request의 get방식을 통한 url의 query JSON화 
var fs=require('fs')
var http=require('http')
var url=require('url')

http.createServer(function(request,response){
  var query = url.parse(request.url,true).query//true를 붙혀주면 JSON이 이를 {}로 받아옴

  response.writeHead(200,{'Content-Type' : 'text/html'})
  response.end('<h1>'+JSON.stringify(query)+'</h1>')//query로 받아온것을 JSON화

}).listen(52273,function(){
  console.log('Server running at http://137.0.0.1:52273')
})
