var express = require('express');
var router = express.Router();
var mysql=require('mysql')

var client=mysql.createConnection({
    user:'root',
    password:'qkrcjfgud12',
    database:'news'
})

/* GET home page. */
router.get('/', function(req, res) {
  client.query('SELECT * FROM comments WHERE comments_id IS NULL',function(error,result){
    if(error){
      return console.log(error)
    }

    res.render('index', { comments : result });
  })
});
router.post('/', function(req, res) {
  var body=req.body

  client.query('INSERT INTO comments(description) VALUES (?)',[
    body.description
  ],function(error){
    if(error){
      return console.log(error)
    }

    res.redirect('/');
  })
});
router.get('/:id', function(req, res) {
  client.query('SELECT * FROM comments WHERE comments_id IS NULL',function(error,result1){
    if(error){
      return console.log(error)
    }
    client.query('SELECT * FROM comments WHERE comments_id=?',[
      req.params.id
    ],function(error,result2){
      if(error){
        return console.log(error)
      }
      console.log(result2)
      res.render('cmt2cmt',{
        comments : result1,
        root_comment_id : req.params.id,
        cmt2cmts : result2
      })
    })
  })
});
router.post('/:id', function(req, res) {
  var body=req.body

  client.query('INSERT INTO comments(description,comments_id) VALUES (?,?)',[
    body.description,req.params.id
  ],function(error){
    if(error){
      return console.log(error)
    }

    res.redirect('/'+req.params.id);
  })
});
module.exports = router;
