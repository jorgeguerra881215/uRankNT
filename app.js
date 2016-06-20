/**
 * Created by root on 5/27/16.
 */

var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    //res.end('Hello Word as;ldfksa\n')
    fs.readFile('app/index.html',callback);
    function callback(error, contents){
        res.write(contents);
        res.end();
    }
}).listen(8080,'localhost');
console.log('Server Running at http://localhost:8080')