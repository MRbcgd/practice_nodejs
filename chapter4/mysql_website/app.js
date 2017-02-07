var fs=require('fs')
var ejs=require('ejs')
var mysql=require('mysql')
var express=require('express')
var bodyParser=require('body-parser')

var app=express()

var client=mysql.createConnection({
  user:'root',
  password:'qkrcjfgud12',
  database:'company'
})

app.use(bodyParser.urlencoded({
  extened:false
}))//body-parser 미들웨어 사용

app.listen(52273,function(request,response){
  console.log('Server running at http://127.0.0.1:52273')
})

app.get('/',function(request,response){//index
  fs.readFile('list.html','utf8',function(error,data){
    if(error){//file error
      return console.log(error)
    }

    client.query('SELECT * FROM products',function(error,results){
      if(error){//db error
        return console.log(error)
      }

      response.send(ejs.render(data,{
        data : results
      }))
    })
  })
})
app.get('/delete/:id',function(request,response){
  client.query('DELETE FROM products WHERE id=?',[
    request.params.id
  ],function(error){
    if(error){
      return console.log(error)
    }
    console.log('DELETE FROM products WHERE id='+request.params.id)
    response.redirect('/')
  })
})
app.get('/insert',function(request,response){
  fs.readFile('insert.html','utf8',function(error,data){
    if(error){
      return console.log(error)
    }

    response.send(data)
  })
})
app.post('/insert',function(request,response){
  var body=request.body

  client.query('INSERT INTO products (name,modelnumber,series) VALUES (?,?,?)',[
    body.name,body.modelnumber,body.series
  ],function(error){
    if(error){
      return console.log(error)
    }

    response.redirect('/')
  })
})
app.get('/edit/:id',function(request,response){
  fs.readFile('edit.html','utf8',function(error,data){
    if(error){
      return console.log(error)
    }

    client.query('SELECT * FROM products WHERE id=?',[
      request.params.id
    ],function(error,result){
      if(error){
        return console.log(error)
      }

      response.send(ejs.render(data,{
        data : result[0]
      }))
    })
  })
})
app.post('/edit/:id',function(request,response){
  var body=request.body

  client.query('UPDATE products SET name=?,modelnumber=?,series=? WHERE id=?',[
    body.name,body.modelnumber,body.series,request.params.id
  ],function(error){
    if(error){
      return console.log(error)
    }

    response.redirect('/')
  })
})
