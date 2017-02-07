var fs=require('fs')
var ejs=require('ejs')
var mysql=require('mysql')
var bodyParser=require('body-parser')
var session=require('express-session')
var express=require('express')

var app=express()

var client=mysql.createConnection({
  user:'root',
  password:'qkrcjfgud12',
  database:'shop'
})

app.use(session({
  secret:'secret key',
  resave:false,
  saveUninitialized:true
}))
app.use(bodyParser.urlencoded({
  extened:false
}))//body-parser 미들웨어 사용

app.listen(52273,function(request,response){
  console.log('Server running at http://127.0.0.1:52273')
})

app.get('/',function(request,response){
  response.redirect('/list_users')
})
app.get('/list_users',function(request,response){
  fs.readFile('list_users.ejs','utf8',function(error,data){
    if(error){
      return console.log(error)
    }

    client.query('SELECT * FROM users',function(error,result){
      if(error){
        return console.log(error)
      }

      response.send(ejs.render(data,{
        data : result
      }))
    })
  })
})
app.get('/delete_user/:id',function(request,response){
  client.query('DELETE FROM users WHERE id=?',[
    request.params.id
  ],function(error){
    if(error){
      console.log(error)
    }

    response.redirect('/')
  })
})
app.get('/insert_user',function(request,response){
  fs.readFile('insert_user.ejs','utf8',function(error,data){
    if(error){
      return console.log(error)
    }

    response.send(data)
  })
})
app.post('/insert_user',function(request,response){
  var body=request.body

  client.query('INSERT INTO users (name) VALUES (?)',[
    body.name
  ],function(error){
    if(error){
      return console.log(error)
    }

    response.redirect('/')
  })
})

app.get('/list_products/:id',function(request,response){

  request.session.userid=request.params.id

  fs.readFile('list_products.ejs','utf8',function(error,data){
    if(error){
      return console.log(error)
    }

    client.query('SELECT * FROM products',function(error,result){
      if(error){
        return console.log(error)
      }
      response.send(ejs.render(data,{
        data : result,
        session_userid : request.session.userid
      }))
    })
  })
})
app.get('/delete_product/:id',function(request,response){
  client.query('DELETE FROM products WHERE id=?',[
    request.params.id
  ],function(error){
    if(error){
      return console.log(error)
    }

    response.redirect('/list_products/'+request.session.userid)
  })
})
app.get('/insert_product',function(request,response){
  fs.readFile('insert_product.ejs','utf8',function(error,data){
    if(error){
      return console.log(error)
    }

    response.send(data)
  })
})
app.post('/insert_product',function(request,response){
  var body=request.body

  client.query('INSERT INTO products (name) VALUES (?)',[
    body.name
  ],function(error){
    if(error){
      return console.log(error)
    }

    response.redirect('/list_products/'+request.session.userid)
  })
})

app.get('/insert_purchase/:id1/:id2',function(request,response){
  var date=new Date()

  client.query('INSERT INTO purchase(users_id,products_id,purchase_date) VALUES (?,?,?)',[
    request.params.id1,request.params.id2,date.toUTCString()
  ],function(error){
    if(error){
      return console.log(error)
    }

    response.redirect('/list_purchase/'+request.params.id1)
  })
})
app.get('/list_purchase/:id',function(request,response){
    fs.readFile('list_purchase.ejs','utf8',function(error,data){
      if(error){
        return console.log(error)
      }

      client.query('SELECT * FROM PURCHASE A LEFT OUTER JOIN products AS B ON A.products_id = B.id WHERE A.users_id=?',[
        request.params.id
      ],function(error,result){
          if(error){
            console.log(error)
          }

          response.send(ejs.render(data,{
            data : result
          }))
      })
    })
})
