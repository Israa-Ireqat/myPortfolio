'use strict'

const express = require('express');
const server = express();
const PORT = 7040;
//static html 
server.use(express.static('./public'));
//test:
server.get('/test',(request,response)=>{
    response.send('I am alive')
})
server.listen(PORT,()=>{
    console.log(`listening to Port ${PORT}`);
})