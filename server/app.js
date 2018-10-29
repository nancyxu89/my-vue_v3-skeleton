const express = require('express')
const path = require('path')
const ejs = require('ejs')
const history = require('connect-history-api-fallback')
const bodyParser = require('body-parser')
const app = express()
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-ACCESS_TOKEN, Access-Control-Allow-Origin, Authorization, Origin, x-requested-with, Content-Type, Content-Range, Content-Disposition, Content-Description");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
})
app.use(history())
app.engine('html', ejs.__express)
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', express.static(path.join(__dirname, '../dist')));
app.get('/', function (req, res) {
    res.type('text/html');
    res.sendfile(path.join(__dirname, '../../public2/') + 'index.html')
})

var server = app.listen(19800, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://localhost:19800/#/');
})