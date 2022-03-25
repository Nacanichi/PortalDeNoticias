const app=require('./config/server.js');
const rotaHome=require('./app/routes/home')(app);
const rotaAdmin=require('./app/routes/admin')(app);
const rotaNoticias=require('./app/routes/noticias')(app);

app.listen('3000',function(){
	console.log('Servidor rodando na porta 3000');
});

