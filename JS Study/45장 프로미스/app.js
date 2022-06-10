const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
app.use(cors());

app.get('/', (req, res)=>{
    res.send('hello world');
})
app.get('/test', (req, res)=>{
    res.send('get method check');
})


app.listen(port, function(){
    console.log(`${port} is opend`);
})