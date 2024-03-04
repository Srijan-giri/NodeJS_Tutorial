const path = require('path');

console.log(path.dirname('E:/Programming/Web Devolopment/Node JS/nodejs_thapa/path.js'));

// E: /Programming/Web Devolopment / Node JS / nodejs_thapa

console.log(path.extname('E:/Programming/Web Devolopment/Node JS/nodejs_thapa/path.js'));

console.log(path.basename('E:/Programming/Web Devolopment/Node JS/nodejs_thapa/path.js'));

console.log(path.parse('E: /Programming/Web Devolopment / Node JS / nodejs_thapa / path.js'));

const myPath = path.parse('E: /Programming/Web Devolopment / Node JS / nodejs_thapa / path.js');

console.log(myPath.name);
console.log(myPath.root);
console.log(myPath.dir);
console.log(myPath.base);
console.log(myPath.ext);



