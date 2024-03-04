const fs = require('fs');

//? Folder create

// fs.mkdirSync("CRUD_File");

// fs.writeFileSync("./CRUD_File/crud.txt", "This is a CRUD File");

// fs.appendFileSync("./CRUD_File/crud.txt", " This is made by Srijan Giri with the help of Thapa Technical :) ");


//^1 -- > read data

// const orig_data = fs.readFileSync("./CRUD_File/crud.txt").toString();
// console.log(orig_data);

//^2 -- > read data

// fs.readFile("./CRUD_File/crud.txt", "utf8", function (err, data) {
//     if (err) throw err;
//     console.log(data); //This is a CRUD File This is made by Srijan Giri with the help of Thapa Technical :)
// });

//^3 -- > read data

// const orig_data = fs.readFileSync("./CRUD_File/crud.txt", "utf8");
// console.log(orig_data);

// fs.renameSync("./CRUD_File/crud.txt", "./CRUD_File/crudfile.txt");


//? file delete

// fs.unlinkSync("./CRUD_File/crudfile.txt");

//? Folder delete
fs.rmdirSync("CRUD_File");











