"use strict";
const quotes = require("./seinfeld");
const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res) =>{
    if (req.url){
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url==='/quotes'){
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(quotes));
    }
    else{
        res.writeHead(404);
        res.end();
    }
}).listen(3000);
