// const MongoClient = require('mongodb').MongoClient;

require('./config/config');
require('./models/user.model');

var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var cors = require('cors');
const route = require('./routes/index.js');

var app = express();


const uri = "mongodb+srv://sanjay:sanjay123@london-cut-fca18.mongodb.net/test?retryWrites=true";
mongoose.connect(uri, {useNewUrlParser:true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const PORT = 3000;

app.use(cors());
app.use(body_parser.json());

app.use('/api', route);

// error handler
app.use((err, req, res, next) => {
    if (err.name == 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
});

app.get('/',(req, res)=>{
    res.send("roger i'm here babes");
});

app.listen(PORT, ()=>{
    console.log("Server started at PORT:" + PORT)
})