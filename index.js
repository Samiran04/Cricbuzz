const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use(express.static('./assets'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log('Error while running surver on port', err);
        return;
    }
})