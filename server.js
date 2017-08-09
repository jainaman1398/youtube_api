const express=require('express');

const app=express();

app.use('/',express.static(__dirname+"/public_static"));




app.listen(8080,function () {
console.log("app rocking at http://localhost:8080");
})