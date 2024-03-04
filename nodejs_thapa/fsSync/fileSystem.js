const fs = require('fs');

//? creating a new file and write

// fs.writeFileSync('read.txt',"welcome to my channel");

// fs.writeFileSync('read.txt', "thapa technical , welcome to my channel"); //^ override 


//? append the data in this file

// fs.appendFileSync('read.txt', "  how are you I am fine thank you :)");


//? read the data

// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);

{/* <Buffer 74 68 61 70 61 20 74 65 63 68 6e 69 63 61 6c 20 2c 20 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 63 68 61 6e 6e 65 6c 0d 0a 0d 0a 20 20 68 6f 77 20 61 ... 29 more bytes > */}

// const orig_data = buf_data.toString();

// console.log(orig_data);//thapa technical , welcome to my channel

//? rename the file

fs.renameSync("read.txt","readwrite.txt");





