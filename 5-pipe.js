// Module 3.7: Demo of Piping between Streams
var request = require('request');

/*
var s = request('http://www.pluralsight.com');

s.pipe(process.stdout);
*/

// another way to express above logic: chain them together
request('http://www.pluralsight.com/').pipe(process.stdout);