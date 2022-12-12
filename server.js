const express = require('express');
const mysql = require('mysql');
const app = express();
const ejs = require('ejs');
const Connection = require('mysql/lib/Connection');


//detalles de conexion
const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: '12345',
    database: 'dbBillar'

})

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.get('/', (req, res)=>{
    connection.query('select * from tblBillarTorneos', (error,rows)=>{
        if(error) throw error;
        if(!error){
            console.log(rows);
            res.render('index', {rows});
        }
    })
})
app.listen(4000, function(){
    console.log('Servidor en linea');
})