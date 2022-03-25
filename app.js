const app=require('./config/server.js'); //pede a contante app
const rotaHome=require('./app/routes/home')(app); //pede constante e fornece o diretorio
const rotaAdmin=require('./app/routes/admin')(app); //pede constante e fornece o diretorio
const rotaNoticias=require('./app/routes/noticias')(app); //pede constante e fornece o diretorio

app.listen('3000',function(){
	console.log('Servidor rodando na porta 3000'); //puxa funcao do servidor e avisa no console caso o servidor rode
});

