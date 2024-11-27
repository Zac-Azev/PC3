//começar a fazer rotas baseado no source e no quant-ux

/*TODO: 1) criar models de Funcionario, Idoso, Atividade
        2) estabelecer seus CRUDS e rotas
        3) escrever seus controllers 
*/
const express = require('express');
const bodyParser = require('body-parser');
//================================
const mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb+srv://isaac61292:isaacramos22!@azev-pc3.aaipb.mongodb.net/?retryWrites=true&w=majority&appName=azev-pc3',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});
//======================================
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
//========================================
const funcController = require('./controllers/funcController');
const grandpaController = require('./controllers/grandpaController');
const activController = require('./controllers/activController');

app.post('/', (req, res) => { //teste
	res.send('Servidor está de pé!');
});

app.post('/init', (req, res) => { //tela inicial
	res.send('SGA - Sistema de Gerenciamento de Asilo! [inserir opções de rota após]');
});

app.get('/login/fnc/:id/:passw', (req, res) => { //tela de login de funcionário
	res.send(fncController.initLogin); //tem que passar alguns dados do 
});

app.get('/login/adm/:id/:passw', (req, res) => { //tela de login administrativo
	res.send(admController.initLogin); //tem que passar alguns dados do 
});

app.get('/login/forgot', (req, res) => { //tela de login de funcionário
	res.send('Resolvendo o problema...');  
});

app.post('/login/profilefnc', (req, res) => { //tela de profile de funcionário
	res.send('Aqui irão vários acessos aos idosos linkados e atividades do dia' + fnc.showScreenData); 
});

app.post('/login/profilefnc/workIsOver', (req, res) => { 
	res.send('Bater ponto' + fncController.logOff);
});

app.get('/login/profilefnc/grandpaWindow/*', (req, res) => { 
	res.send('Aqui, a partir da escolha de um idoso, acessar-se-á seus dados'); 
});

app.get('/login/profilefnc/activWindow/*', (req, res) => { 
	res.send('Aqui, a partir da escolha de uma atividade, acessar-se-á seus dados');
});

app.post('/login/profilefnc/activWindow/*/was-made', (req, res) => { 
	res.send('Atividade concluída!' + activController.markedAsMade);
});

app.post('/login/profileAdm', (req, res) => { 
	res.send('Aqui é a tela de perfil do administrador, e terá visualização de alguns outros recursos' + admController.showIndex);
});

app.post('/login/profileAdm/workIsOver', (req, res) => { 
	res.send('Bater ponto' + admController.logOff);
});

app.put('/login/profileAdm/grandpaManagement/*/create', (req, res) => {  //add idoso
	res.send(grandpaController.store);
});

app.get('/login/profileAdm/grandpaManagement/*/list', (req, res) => {  //mostra idoso
	res.send(grandpaController.show);
});

app.delete('/login/profileAdm/grandpaManagement/*/delete', (req, res) => {  //remove idoso
	res.send(grandpaController.destroy);
});

app.put('/login/profileAdm/grandpaManagement/*/update', (req, res) => {  //update idoso
	res.send(grandpaController.update);
});

app.put('/login/profileAdm/fncManagement/*/create', (req, res) => {  //add funcionario
	res.send(fncController.store);
});

app.get('/login/profileAdm/grandpaManagement/*/list', (req, res) => {  //mostra funcionario
	res.send(fncController.show);
});

app.delete('/login/profileAdm/grandpaManagement/*/delete', (req, res) => {  //remove funcionario
	res.send(fncController.destroy);
});

app.put('/login/profileAdm/grandpaManagement/*/update', (req, res) => {  //update funcionario
	res.send(fncController.update);
});

app.put('/login/profileAdm/activManagement/*/create', (req, res) => {  //add activ
	res.send(activController.store);
});

app.get('/login/profileAdm/activManagement/*/list', (req, res) => {  //mostra activ
	res.send(activController.show);
});

app.delete('/login/profileAdm/activManagement/*/delete', (req, res) => {  //remove activ
	res.send(activController.destroy);
});

app.put('/login/profileAdm/activManagement/*/update', (req, res) => {  //update activ
	res.send(activController.update);
});


app.listen(3000, () => console.log('server started'));
