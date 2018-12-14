var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'demo'
});
connection.connect();
var sql = 'SELECT * FROM test', data
connection.query(sql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }

    data = result
});

connection.end();

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


//写个接口123
app.get('/123', function (req, res) {
    console.log(req)
    res.status(200),
        res.json(data)
});

//配置服务端口

var server = app.listen(3000, function () {
    var host = server.address().address;

    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})