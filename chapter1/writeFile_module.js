//fs모듈의 writeFileSync()메소드와 writeFile()메소드
var fs=require('fs')
var data='Ohio Ohio Ohio'

console.log('--writeFile --')//비동기성
console.log(1)
fs.writeFile('textfile2.txt',data,'utf8',function(err,data){//비동기성이기 때문에 백그라운드에서 작업
  console.log('writeFile : 2')//이 내용들은 밑의 내용들이 다 끝나고 프로그램의 마지막에 결과 출력
  console.log('writeFile Completed!')
})
console.log(3)

console.log('--writeFileSync--')//동기성 -> 순서대로
console.log(1)
fs.writeFileSync('textfile2.txt',data,'utf8')
console.log('writeFileSync Completed!')
console.log('writeFileSync : 2')
