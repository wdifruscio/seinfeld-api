"use strict";
const quotes = require("./seinfeld");
const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static(__dirname + '/mainpage'));

app.get('/quotes',(req, res)=>{
    if(req){
        res.end(JSON.stringify(quotes));
    }
    else throw err
});

app.get('/random',(req, res)=>{
    if(req){
        let quoteRandom = Math.floor(Math.random() * quotes.quotes.length);
        let random = quotes.quotes[quoteRandom];
        res.end(JSON.stringify(random));
    }
    else throw err
});

app.use('*', express.static(__dirname + '/404'));

app.listen(port, function () {
  console.log('App listening on port!')
});

