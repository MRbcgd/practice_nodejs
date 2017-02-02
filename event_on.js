//on() 메소드 : 이벤트를 연결시켜주는 메소드
//on(이벤트이름,이벤트리스너)
//setMaxListeners -> 한 이벤트에 이벤트리스너는 최대 10개까지 가능. 이를 늘리고 싶을떄 사용
process.setMaxListeners(15);//15개까지 이벤트리스너 사용개수 증가

//프로그램이 종료될때 good bye를 출력하게 함
process.on('exit',function(code){
  console.log('good bye!')
})

var test=function(){
  for (var i = 0; i < 100; i++) {
    console.log('loading..')
  }
}

setTimeout(test,1000);//1초후 test메소드 실행
