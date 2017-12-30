var http = require('http');

var options = {
    host: 'www.pluralsight.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log("Going to make requests...");

http.get(options, function(response){
    console.log(response.statusCode);
    response.pipe(process.stdout);
});