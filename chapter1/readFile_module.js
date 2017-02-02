//fs모듈의 readFileSync()메소드와 readFile()메소드
var fs=require('fs')

console.log('--readFileSync--')//동기성 -> 순서대로
console.log(1)
var text=fs.readFileSync('textfile.txt','utf8')
console.log(text)
console.log(2)

console.log('--readFile --')//비동기성
console.log(1)
var text=fs.readFile('textfile.txt','utf8',function(err,data){//비동기성이기 때문에 백그라운드에서 작업
  console.log(2)
  console.log(data)
})
console.log(3)//작업이 끝나면 위의 백그라운드 작업결과를 불러온다.
