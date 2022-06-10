const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;

app.use(cors());


app.get("/" ,(req,res)=>{
    res.send('hello world');
})


app.get('/test1', function(req, res){
    console.log('get요청을 받았다!');
    res.status(200).json({ "name": "jinbro" });
    // res.send("testsetetsset");
  });
app.post('/test1', function(req, res){
    console.log('post요청을 받았다!');

    res.send("testsetetsset");
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