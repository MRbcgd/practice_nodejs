//동기성 예외처리
var fs=require('fs')

console.log('--readFileSync--')//동기성 -> 순서대로

try {
  var text=fs.readFileSync('hellomynameisbakchulhyong.txt','utf8')
  console.log(text)
} catch (e) {
  console.log(e)//파일이름 및 파일경로가 잘못되었다는 에러출력
}
