const express = require('express')
const path = require('path')
const ejs = require('ejs')
const history = require('connect-history-api-fallback')
const bodyParser = require('body-parser')
const schedule = require("node-schedule")
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
    res.sendfile(path.join(__dirname, '../dist') + 'index.html')
})
app.post('/github-webhook/', function (req,res) {
    console.info(req)
    res.send('ok')
})

let server = app.listen(19800, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://localhost:19800/#/');
})
let count = 0
const io = require('socket.io')(server);
// 监听与客户端的连接事件
io.on('connection', socket => {
    socket.emit('news', {hello: 'world'});
    socket.on('request', function (data) {
        console.log(data);
    });
    socket.on('received', function (data) {
        console.log(data);
    });
    setInterval(function () {
        if (count > 10000) {
            count = 0
        }
        socket.emit('receive', {count: count++});
    }, 1000);
});

