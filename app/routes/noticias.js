module.exports=function(app){
    app.get('/noticias',function(req,res){
        const dbConnection=require('../../config/dbConnection'); //requer arquivos de outro diretorio
        const connection=dbConnection(); //funcao const para coneccao 
        connection.query('select * from noticias', function(error,result){
            if (error){
                console.log(error); //mostra caso occora um erro
            
            }
            res.render('noticias/noticia.ejs',{noticias:result}); //modulo visual
        });
    });
}
