var rint=require('./rint.js')

rint.timer.on('tick',function(){//이벤트리스너와 연결
  console.log('tick..')
})
