var mysql=require('mysql')

var client=mysql.createConnection({
    user:'root',
    password:'qkrcjfgud12',
    database:'company'
})

//client.query('USE company') //createConnection에 database 설정안해주었다면
client.query('SELECT * FROM products',function(error,result,fields){
  if(error){
    return console.log(error)
  }
  console.log(result)
})

//토큰 : ???는 배열을 통해서 추후에 입력할수 있다
client.query('INSERT INTO products(name,modelnumber,series) VALUES (?,?,?)',['PCH','111','NUMBER 1 MAN'],function(error,result,fields){
  if(error){
    return console.log(error)
  }
  console.log('INSERT Data..Succes')
})
