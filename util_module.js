//util 모듈의 format() 메소드
//-> 출력하지 않고 문자열로 반환
var util=require('util')

var data=util.format('%d + %d + %d',10,20,10+20)
console.log(data)
