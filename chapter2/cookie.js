var http=require('http')

http.createServer(function(request,response){
  var date=new Date()
  date.setDate(date.getDate()+7)

  response.writeHead(200,{
    'Content-Type' : 'text/html',
    //cookie 설정
    'Set-Cookie' : [
      'breakfast = toast; Expires = ' + date.toUTCString,
      'dinner = chincken'
    ]
  })
  response.end('<h1>'+request.headers.cookie+'</h1>')//cookie 호출
}).listen(52273,function(){
  console.log('Server Running at http://127.0.0.1:52273')
})
