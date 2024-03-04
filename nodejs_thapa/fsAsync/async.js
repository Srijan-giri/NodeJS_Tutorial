const fs = require('fs');

//^ Syncronus vs Asynchronus

//**synchronus

// const data = fs.readFileSync('read.txt','utf-8');
// console.log(data);
// console.log('after the data');


//**asynchronus

fs.readFile('read.txt', 'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});
console.log('after the data');

