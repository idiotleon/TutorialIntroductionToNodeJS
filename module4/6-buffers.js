var b = new Buffer('Hello');

console.log(b.toString());

console.log(b.toString('base64'));
console.log(b.toString('ascii'));
console.log(b.toString('utf16le'));
console.log(b.toString('ucs2'));

var c = new Buffer('World').toString('base64');

console.log(b.toString('utf-8', 0.2));