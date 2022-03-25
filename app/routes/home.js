module.exports=function(app){

    app.get('/',function(req,res){
        res.render('home/index.ejs');
    });
}
//exporta o modulo e funcao app
//busca modulo visual no diretorio /home/index.ejs