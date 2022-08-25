const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
app.engine('hbs', engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, 'public')));

// port 3030
const port = 3030;

// route
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
});