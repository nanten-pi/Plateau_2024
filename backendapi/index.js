const express = require('express')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.post('/', function(req, res) {
    console.log(req.body)
    console.log(req.body.name)
    res.json({ "hello": "taro" });
    });

app.listen(3000, console.log('Server listening port 3000'))