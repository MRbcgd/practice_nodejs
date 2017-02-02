//require 메소드는 모듈을 호출할 때 사용
var module=require('./module.js')

console.log('abs(-273) = %d', module.abs(-273))
console.log('circleArea(3) = %d', module.circleArea(3))
