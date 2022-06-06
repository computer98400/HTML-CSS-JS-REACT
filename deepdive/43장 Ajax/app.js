const express = require('express');
const app = express();

const port = 3000;

app.get("/" ,(req,res)=>{
    res.send('hello world');
})


app.get('/test1', function(req, res){
    console.log('요청을 받았다!');
    res.status(200).json({"name": "jinbro"});
  });

app.get("/test2" ,(req,res)=>{
    res.send('hello world333');
})

app.use((req, res)=>{
    res.header('Access-Control-Allow-origin','*');
})
app.listen(port, ()=>{
    console.log("server started at",port);
})