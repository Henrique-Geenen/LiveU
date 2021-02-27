const express = require('express');
const app = express ();
const path = require('path');

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "http://127.0.0.1:5500/LiveU/");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next()
  });

app.use(express.static('C:/projects/LiveU'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/index', function(req,res){

const sql = require('mssql');

const config = {
    user: 'user_trial',
    password: '7412LIVE!@#$%¨&*()',
    server: 'virtual2.febracorp.org.br',
    database: 'CONTOSO',
    port: 1433,
    
    options: {
        cryptoCredentialsDetails: {
          minVersion: 'TLSv1'
        }
      }
 };

sql.connect(config, function(err){

    if (err) console.log(err);

    let sqlRequest = new sql.Request();

    let sqlQuery = 'use CONTOSO; INSERT INTO tbs_nome (nome, cod) VALUES('+ localStorage.nome +', '+ localStorage.codNome +'); INSERT INTO tbs_sobrenome (nome, cod) VALUES('+ localStorage.sobrenome +', '+ localStorage.codSobrenome +'); INSERT INTO tbs_email (nome, cod) VALUES('+ localStorage.email +', '+ localStorage.codEmail +');';
    
    sqlRequest.query(sqlQuery, function(err, data){

        if (err) console.log (err)

        console.log(data);
        console.log(data.recordset);
        console.log(data.rowsAffected);
        console.log(data.recordset[0]);

    sql.close();

    });
});
});


const webserver = app.listen(5000, function(){
    console.log('Node Web Server is running..');
});