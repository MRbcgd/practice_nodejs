exports.input_err=new process.EventEmitter()//입력오류 이벤트
exports.completed=new process.EventEmitter()//계산결과 출력 이벤트

exports.input_err.on('input_err',function(){
  console.log('\u001b[31m','Serious Error! Try Again.')
  console.log('\u001b[33m','  avaliable -> node app.js [+ - * /] Number1 Number2')
  console.log('\u001b[0m','  example   -> node app.js + 1 2')
})

exports.completed.on('completed',function(input_data){
  console.log('\u001b[33m',input_data)
  console.log('\u001b[31m','Completed..','\u001b[0m')

})

process.on('exit',function(code){//종료
  console.log('good bye!')
})
