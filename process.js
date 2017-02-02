// node node.process.js --exit 10000 입력!


//process의 argv 속성
//process의 exit() 메소드

//item : 매개변수 내용
//index 0일 때 item -> nodejs 경로
//index 1일 때 item -> 현재 프로그램 파일 경로
//이후로 입력된 매개변수들..
process.argv.forEach(function (item,index){//프로그램 매개변수
  console.log(index + ' : ' + typeof (item) + ' : ', item)

  if (item == '--exit'){
    //다음 실행 매개변수를 얻음
    var exitTime = Number(process.argv[index + 1])//--exit의 다음 매개변수 10000을 호출

    //일정시간뒤에 종료
    setTimeout(function (){
      process.exit()//프로그램 종료 메소드
    },exitTime)
  }
})
