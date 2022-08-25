const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const database = require('./config/database');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
app.engine('hbs', engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(bodyParser.json());

app.use(bodyParser.json({
    type: 'application/vnd.api+json',
}));

app.use(methodOverride());

const Employee = require('./models/employee');

mongoose.connect(database.url);

// port 3030
const port = 3030;

// route
app.get('/', function(req, res){
    res.render('home', {
        layout: 'index',
    })
})

// get all employee data from db
app.get('/api/employees', function(req, res){

    // use mongoose to get all todos in the database
    Employee.find(function(err, employees){

        // if there is an error retrieving , send the error otherwise send data
        if (err) {
            res.send(err);
        }

        res.json(employees);
    });
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
});