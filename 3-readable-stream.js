// Module 3.6: Demo of readable stream
var request = require('request');

var s = request('http://ww.pluralsight.com');

s.on('data', function(chunk){
    console.log(">>>Data>>>" + chunk);
});

s.on('end', function(){
    console.log(">>>Done!>>>")
});