const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;

// -- ExpressJS -- //
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'))

http.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});