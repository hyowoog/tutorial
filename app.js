const express = require('express');
const { networkInterfaces } = require('os');
const server = express();

server.use(express.static(__dirname+"/public"))

server.get("/", (req, res)=>{
    console.log(req.user);
    res.sendFile(__dirname+"/index.html");
});

server.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
});

server.use((req, res)=>{
    res.sendFile(__dirname+"/404.html");
})

server.listen(3000, (err)=>{
    if (err) return console.log(err);
    console.log("the server is lintening port 3000",)
})