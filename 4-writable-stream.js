// Module 3.6: Demo of writable stream
console.log("stdout is writable? " + process.stdout.writable);

process.stdout.write("Hello");
process.stdout.write("World");