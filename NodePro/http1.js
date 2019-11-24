const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h6>SAi tillu12</h6>');
    res.end();
});
server.listen(3000,()=>{
    console.log('server is up and running .....');
})