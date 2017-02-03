//get방식과 post방식 비교
var fs=require('fs')
var http=require('http')
var url=require('url')

http.createServer(function(request,response){
  if(request.method == 'GET'){//url 입력하면 로그인 페이지
    fs.readFile('htmlpage.html',function(error,data){
      response.writeHead(200,{'Content-Type' : 'text/html'})
      response.end(data)
    })
  }
  else if(request.method == 'POST'){//post를 하면 data를 불러옴
    request.on('data',function(data){
      response.writeHead(200,{'Content-Type' : 'text/html'})
      response.end(data)
    })
  }
}).listen(52273,function(){
  console.log('Server running at http://137.0.0.1:52273')
})
