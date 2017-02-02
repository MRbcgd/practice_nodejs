//비동기성 예외처리
var fs=require('fs')

console.log('--readFile--')
fs.readFile('hellomynameisbakchulhyong.txt','utf8',function(err,data){//콜백방식
  if(err){
    console.log(err)
  }
  else{
    console.log(data)
  }
})
