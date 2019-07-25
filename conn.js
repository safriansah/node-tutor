const mysql=require('mysql');

const conn=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_tutor'
});

conn.connect(function(error){
    if(error) throw error;
});

module.exports=conn;