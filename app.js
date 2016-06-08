/**
 * Created by root on 5/27/16.
 */

var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end('Hello Word\n')
}).listen(80,'localhost');
console.log('Server Running at http://localhost:1337')