//ejs.render()와 ejs사용방법 및 주의사항
var fs=require('fs')
var jade=require('jade')
var http=require('http')

http.createServer(function(request,response){
  fs.readFile('jadepage.jade','utf8',function(error,data){//ejs사용시 반드시 utf8해주어야함!
    if(error){
      return console.log(error)
    }

    var fn=jade.compile(data)//jade는 이걸해줘야함

    response.writeHead(200,{'Content-Type' : 'text/html'})
    response.end(fn({//괄호안에 데이터를 넣어준다.
      username : 'pch',
      password : '0000'
    }))
  })
}).listen(52273,function(){
  console.log('Server running at http://127.0.0.1:52273')
})
