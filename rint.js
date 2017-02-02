//EventEmitter()는 process객체에 있는 생성자 함수로 객체를 생성해줌

exports.timer=new process.EventEmitter()

setInterval(function(){
  exports.timer.emit('tick')//tick이벤트 반복하여 실행
},1000)
