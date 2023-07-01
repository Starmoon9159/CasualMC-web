var express = require("express");
var fs = require("fs");
var app = express();
const img_count = require('../../config.json')
var port = require("./config.json")


app.use(express.static(__dirname + "/public"));

 
app.get('/', function (req, res) {
    res.render('index.html')
})
app.listen(port);
console.log(`親愛的R冷，網站啟動完畢囉~~\n預設的port是[3000]`)

module.exports = {
    img_count
}