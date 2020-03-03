
const express =require('express')
var app = express()
var bodyparser = require('body-parser')
var aluno = require('./model/aluno')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended:false}))

app.set('view engine','ejs')

app.get('/',function(req,res){
    res.render('listar.ejs',{})
})

app.get('/add',function(req,res){
    res.render('adicionar.ejs',{})
})

app.post('/add',function(req,res){
    var Aluno = new aluno({
        Nome: req.body.nome,
        Endereco: req.body.endereco,
        Telefone: req.body.telefone
        })
    Aluno.save(function(err){
     aluno.find({}).exec(function(e,docs){;
       
        if(err){
            res.render('listar.ejs',{ msg : err, listaAlunos: docs})
        }
        else{
            res.render('listar.ejs',{ msg : "salvo com sucesso", listaAlunos: docs})
        }
    })
  })
})
app.get('/edit',function(req,res){
    res.render('editar.ejs',{})
})





app.listen(3000,function(){
     console.log("estou scutando na porta 3000")})