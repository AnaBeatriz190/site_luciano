const http = require('http');
//const moment = require('moment');
const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000; 

app.get('/', (req, res)=> {
    fs.readFile(path.join(__dirname, "index.html"), (err, data)=>{
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erro interno do servidor.');
            return;
        }

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });    
});

app.get('/HOME', (req, res) =>{
    fs.readFile(path.join(__dirname, "PAGES/HOME.html"), (err, data)=>{
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erro interno do servidor.');
            return;
        }else{
            console.log('Oi')
        }

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });    
});

app.get('/login', (req, res)=> {
    res.send('Tela de login');
});

app.listen(port, ()=>{
    console.log('Servidor rodando em http://localhost:', port);
});