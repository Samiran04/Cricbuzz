const express = require('express');
const app = express();
const port = 8000;




app.listen(port, function(err){
    if(err){
        console.log('Error while running surver on port', err);
        return;
    }
})