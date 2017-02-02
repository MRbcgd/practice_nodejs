// crypto 모듈을 사용하여 input->cipher->decipher 즉 암호화 복호화 과정
var crypto=require('crypto')

var key='There is no one knows my key.'//아무도 모르는 키값
var input='password'//비밀번호

var cipher=crypto.createCipher('aes192',key)//aes방식 사용
cipher.update(input,'utf8','base64')
var cipheredOutput=cipher.final('base64')//암호화

var decipher=crypto.createDecipher('aes192',key)//aes방식으로 복호화
decipher.update(cipheredOutput,'base64','utf8')
var decipheredOutput=decipher.final('utf8')//복호화

console.log('원래문자열 : ' + input)
console.log('암호화 : ' + cipheredOutput)
console.log('복호화 : ' + decipheredOutput)
