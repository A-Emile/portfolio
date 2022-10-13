const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const PORT = process.env.port | 817

app.use(express.static(__dirname + '/'));
app.use('/icons',express.static(__dirname + '/icons'));
app.use('/build', express.static(__dirname + '/build'));

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', router);
app.listen(PORT);

console.log('Running at Port ' + PORT);
console.log(`http://localhost:${PORT}`);