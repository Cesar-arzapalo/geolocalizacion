const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname+'/dist/Localizacion'));
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/Localizacion/index.html'));
});

app.listen(process.env.PORT || 8080);