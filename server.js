"use strict";
const quotes = require("./seinfeld");
const express = require('express');
const app = express();


app.use('/', express.static(__dirname + '/mainpage'));

app.get('/quotes',(req, res)=>{
    if(req){
        res.end(JSON.stringify(quotes));
    }
});

app.get('/george',(res,req)=>{
    if (req){
        
    }
});

app.get('/jerry',(res,req)=>{
    if (req){
        
    }
});

app.get('/kramer',(res,req)=>{
    if (req){
        
    }
});

app.get('/elaine',(res,req)=>{
    if (req){
        
    }
});

app.get('/random',(req, res)=>{
    if(req){
        let quoteRandom = Math.floor(Math.random() * quotes.quotes.length);
        let random = quotes.quotes[quoteRandom];
        res.end(JSON.stringify(random));
    }
});

app.listen(function () {
  console.log('App listening on port 8080!')
})

