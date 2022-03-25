module.exports=function(app){
    app.get('/noticias',function(req,res){
        const dbConnection=require('../../config/dbConnection');
        const connection=dbConnection();
        connection.query('select * from noticias', function(error,result){
            if (error){
                console.log(error);
            
            }
            res.render('noticias/noticia.ejs',{noticias:result});
        });
    });
}