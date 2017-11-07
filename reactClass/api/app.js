var express=require("express")
var bodyParser = require('body-parser');

var app=new express()

var mfw=require("./router/mfw.js")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/mfw",mfw)

app.listen("9998")