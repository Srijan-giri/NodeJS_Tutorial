const os = require('os');

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());
console.log(os.networkInterfaces());
console.log(os.release());


const freeMemory = os.freemem();

// console.log(freeMemory);

console.log(`${freeMemory / 1024 / 1024 / 1024} GB free memory`);

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024} GB total memory`);

console.log(os.cpus());




