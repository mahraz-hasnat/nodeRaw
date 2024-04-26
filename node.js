var https = require('http');

https.createServer(function(req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('this is the first node practice!');
}).listen(4200);