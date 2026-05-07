var express = require("express");

var app=express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(80, ()=>{
    console.log("servidor rodando..")

})

app.get("/", (req,res)=>{

    res.render("post")
})



app.get('/cadastro_post', (req,res)=>{


    res.render("cadastro_post")
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/resposta', async(req,res)=>{
    const titulo = req.body.titulo;
    const resumo = req.body.resumo;
    const conteudo = req.body.conteudo;

    res.send("tudo certo");

})