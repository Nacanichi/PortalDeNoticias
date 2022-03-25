const mysql=require('mysql');
//funcao requer mysql
module.exports=function(){ 
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'ifms',
        database:'portal_noticias'

    });
}
//exporta funcao e puxa o myslq para busca de dados de host usuario senha e database