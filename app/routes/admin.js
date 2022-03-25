module.exports=function(app){
    app.get('/formularionclusaonoticia',(req,res)=>{
        res.render('admin/form_add_noticia.ejs');
    });
}
//exporta a funcao para o locar requerido
//pega do diretorio e utiliza o res,req
//mostra o diretorio para a fonte visual do render