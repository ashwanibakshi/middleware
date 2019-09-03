var express=require('express');
var http=require('http');

var app=express();

var mylogger=function(req,res,next){
    req='1'
    console.log('sdfsdf');
    next();
}

var data=function(req,res,next){
    req=1
    console.log(req.d);
    next()
}

app.use(mylogger)
app.use(data)

app.get('/', function (req, res) {
    res.send('Hello World!')
  })

const port= process.env.PORT||3000;
app.listen(port,()=>console.log(port))

