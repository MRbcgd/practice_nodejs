//ejs.render()와 ejs사용방법 및 주의사항
var fs=require('fs')
var ejs=require('ejs')
var http=require('http')

http.createServer(function(request,response){
  fs.readFile('ejspage.ejs','utf8',function(error,data){//ejs사용시 반드시 utf8해주어야함!
    if(error){
      return console.log(error)
    }
    response.writeHead(200,{'Content-Type' : 'text/html'})
    response.end(ejs.render(data,{//ejs.render를 통해 data를 전달
      username : 'pch',
      password : '0000'
    }))
  })
}).listen(52273,function(){
  console.log('Server running at http://127.0.0.1:52273')
})
