//location 속성을 통한 페이지 강제이동
var http=require('http')

http.createServer(function(request,response){
  //status302는 강제이동시에 많이사용됨
  response.writeHead(302,{'Location' : 'http://www.hanbit.co.kr'})
  response.end()
}).listen(52273,function(){
  console.log('connected..52273')
})
