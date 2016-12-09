const express = require('express');
const requestIp = require('request-ip');

const {getOs, getLang} = require('./helper');

const port = process.env.PORT || 3000;

var app = express();


app.get('/',(req,res)=>{
    let ip = requestIp.getClientIp(req);
    let os = getOs(req.headers['user-agent']);
    let lang = getLang(req.headers['accept-language']);
     res.send({ip,os,lang});
});   

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});