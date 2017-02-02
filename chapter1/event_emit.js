//emit() 메소드 : 이벤트 강제 호출
process.on('exit',function(code){
  console.log('good bye!')
})

//* emit() 이벤트 강제 호출된 이벤트는 리스너만 호출되므로 프로그램이 종료되지 않는다.
process.emit('exit')
process.emit('exit')
process.emit('exit')
process.emit('exit')
process.emit('exit')
process.exit()//프로그램 강제 종료 메소드 exit()
process.emit('exit')
