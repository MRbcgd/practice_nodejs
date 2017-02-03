//cookie 설정, 호출/split(),map(value,index)
//cookie는 처음에는 존재하지 않는다. 이유는 set을 해주어야하기 때문에.
//cookie는 name=pch;password=0000 이렇게 출력됨
//;로 split
//map은 모든 배열의 요소하나씩 같은 작업을 수행한다.
//=로 split
//key와 value로 나눠준다.
var http=require('http')

http.createServer(function(request,response){
  if(request.headers.cookie){//cookie 호출
    var cookie=request.headers.cookie.split(';').map(function(element){
      var element=element.split('=')
      return {
        key : element[0],
        value : element[1]
      }
    })
    response.end(JSON.stringify(cookie))
  } else{
    console.log('no cookie')
    response.writeHead(200,{
      'Content-Type' : 'text/html',
      'Set-Cookie' : ['name = pch', 'password = 0000']
    })
    response.end('<h1>Set Cookie!</h1>')
  }
}).listen(52273,function(){
  console.log('Server running at http://137.0.0.1:52273')
})
