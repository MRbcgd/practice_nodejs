// response.send : json 형태로 출력가능
var express=require('express')//express 모듈
var app=express()

app.use(function(request,response){
  var output=[]

  for (var i = 0; i < 3; i++) {
    output.push({
      count : i,
      name : 'name - ' + i
    })
  }

  response.send(output)//response.send : json 형태로 출력가능
})

app.listen(52273,function(){
  console.log('Server running at 52273...')
})
