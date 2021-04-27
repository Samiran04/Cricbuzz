const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');

//socket.io
const chatServer = require('http').Server(app);
const chatSocket = require('./config/scoring').chatSockets(chatServer);
chatServer.listen(5000);
console.log('Char Server is listening on port 5000');

app.use(express.urlencoded());

app.use(express.static('./assets'));

app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log('Error while running surver on port', err);
        return;
    }
})