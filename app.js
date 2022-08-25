const express = require('express');
const app = express();

// port 3030
const port = 3030;

// route
app.get('/', function(req, res){
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
});