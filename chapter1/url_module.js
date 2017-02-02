//url모듈의 parse메소드 : url문자열을 url 객체로 변환
var url=require('url')

var parseObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160')

console.log(parseObject)
