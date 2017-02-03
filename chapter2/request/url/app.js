//request객체를 통하여 url 속성 이용하기
var fs=require('fs')
var http=require('http')
var url=require('url')

http.createServer(function(request,response){
  var pathname = url.parse(request.url).pathname//url을 문자화후에 pathname을 추출한다.

  if(pathname == '/' ){
    fs.readFile('page1.html',function(error,data){
      if(error){
        return console.log(error)
      }
      response.writeHead(200,{'Content-Type' : 'text/html'})
      response.end(data)
    })
  }
  else if(pathname == '/otherPage'){
    fs.readFile('page2.html',function(error,data){
      if(error){
        return console.log(error)
      }
      response.writeHead(200,{'Content-Type' : 'text/html'})
      response.end(data)
    })
  }
}).listen(52273,function(){
  console.log('Server running at http://137.0.0.1:52273')
})
