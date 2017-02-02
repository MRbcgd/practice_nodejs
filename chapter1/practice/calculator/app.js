var util=require('util')
var formula=require('./module/formula.js')//사칙연산 계산 모듈
var notice=require('./module/notice.js')//안내문 모듈
var button=process.argv[2]//사칙연산 선택

//3번째 매개변수가 사칙연산 기호일 때
if(button=='+' || button=='-' || button=='x' || button=='div'){
  var num1=Number(process.argv[3])
  var num2=Number(process.argv[4])
  var result=0
  var input_data=null

  switch (button) {
    case '+' : result=formula.pls_a_b(num1,num2)
      break
    case '-' : result=formula.mins_a_b(num1,num2)
      break
    case 'x' : result=formula.mul_a_b(num1,num2)
      break;
    case '/' : result=formula.div_a_b(num1,num2)
      break;
  }

  input_data=util.format('%d ' + button + ' %d = %d',num1,num2,result)//계산과정 문자화 출력
  notice.completed.emit('completed',input_data)//계산결과 출력 이벤트 호출
} else{
  notice.input_err.emit('input_err')//입력오류 출력 이벤트 호출
}






// calculator.timer.emit('tick')
// calculator.timer.emit('peak')
