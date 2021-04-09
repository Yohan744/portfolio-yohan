const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
const axios = require('axios')

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const requestApiDribbble = async (key,link) => {
    const response = await axios.get(`https://api.dribbble.com/v2/user/shots?access_token=${key}`)
    try {
        app.get(link, (req,res) => {
            res.send(response.data)
        })
    } catch (err) {
        console.log(err)
    }
}

// -- ExpressJS -- //
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'))

http.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});