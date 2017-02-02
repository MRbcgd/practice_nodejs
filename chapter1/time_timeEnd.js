//time()
//timeEnd()
//프로그램 실행 시간 구하기
console.time('test')

for (var i = 0; i < 1000; i++) {
  console.log('loading..')
}

console.timeEnd('test')

console.log('connected..')
