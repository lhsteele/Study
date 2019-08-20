var fs = require('fs');
var http = require('http');

// read from text file and write a new one
fs.readFile('myCSV.txt', 'utf8', function(err, data) {
  fs.writeFile('csvWrite.txt', data, function(err, data) {
    if (err) console.log("error", err)
  })
})

// write to a webpage
http.createServer(function (req, res) {
  fs.readFile('myCSV.txt', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
}).listen(8080);

