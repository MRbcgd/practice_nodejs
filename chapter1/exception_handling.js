//비동기성 예외처리(조기리턴)
//->조기리턴을 사용하면 들여쓰기를 줄일수 있고 프로그램을 바로 종료할수 있다.
var fs=require('fs')

console.log('--readFile--')
fs.readFile('hellomynameisbakchulhyong.txt','utf8',function(err,data){
  if(err){ return console.log(err)}//조기리턴

  console.log(data)
})

// console.log('--readFile--')
// fs.readFile('hellomynameisbakchulhyong.txt','utf8',function(err,data){//콜백방식
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log(data)
//   }
// })
