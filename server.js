"use strict";

const   express = require('express'),
        app = express(),
        seinfeld = require('./seinfeld').quotes,
        mongo = require('mongodb').MongoClient,
        config = require('./config').CONFIG,
        port = process.env.PORT || 3000;

let quotes = (db) => {
    return db.collection('quotes');
}

let saveFromJSON = mongo.connect(config.URL, (err, db) => {
    quotes(db).insert(seinfeld);
    console.log('success');
});

let errorHandler = function (error) {
        if (error) {
        try {
                throw error;
        }
        catch(e) {
                console.log(e);
        }
        }
        return;
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', express.static(__dirname + '/mainpage'));

app.get('/quotes', (req, res, err) => {
        
    if (err)
        errorHandler(err);    
        
    if (req) {
        mongo.connect(config.URL, (err, db) => {
            quotes(db).find({}).toArray((err, doc) => {
                if (err)
                   errorHandler(err);  
                res.send(doc);
                db.close();
            });
        });
    }
});

app.get('/random', (req, res, err) => {
    if (err)
       errorHandler(err);      
    if (req) {
        mongo.connect(config.URL, (err, db) => {
     if (err)
       errorHandler(err);  
            quotes(db).find({}).toArray((err, doc) => {
                        if (err)
       errorHandler(err);  
                res.send(doc[Math.floor(Math.random() * doc.length)]);
                db.close();
            });
        });
    }
    else res.status(500).send('Something Broke!');
});

app.get('/:filter/:id', (req, res, err) => {
            if (err)
       errorHandler(err);  
    mongo.connect(config.URL, (err, db) => {
                if (err)
       errorHandler(err);  
        quotes(db).find({
            [req.params.filter]: req.params.id.charAt(0).toUpperCase() + req.params.id.slice(1)
        }).toArray((err, doc) => {

            if (err) {
                res.status(500).send('Sorry, parameters provided are not valid');
            }

            else {
                res.send(doc);
                db.close();
            }
        });
    });
});

app.get('/:filter/:id/random', (req,res,err) => {
            if (err)
       errorHandler(err);  
    mongo.connect(config.URL, (err, db) => {
            
        quotes(db).find({
            [req.params.filter]: req.params.id.charAt(0).toUpperCase() + req.params.id.slice(1)
        }).toArray((err, doc) => {

            if (err) {
                res.status(500).send('Sorry, parameters provided are not valid');
            }
            

            else {
                res.send(doc[Math.floor(Math.random() * doc.length)]);
                db.close();
            }
        });
    });
});

app.use('*', express.static(__dirname + '/404'));

app.listen(port, function () {
    console.log('App listening on port!')
});

