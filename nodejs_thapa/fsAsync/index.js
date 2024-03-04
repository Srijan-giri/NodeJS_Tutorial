const fs = require('fs');


//? Create File

// fs.writeFile('read.txt', 'Today is awasome Day :)',
//     (err) => {
//         console.log("file is created");
//         console.log(err);

//     });

    // we pass them a function as an argument - a callback - that gets called when that tasks completes.
    // the callback has an argument that tells you whether
    // the operation completed successfully.
    // Now we need to say what to do when fs.writeFile
    // has completed (even if it's nothing),and start
    // checking for errors.



//? Append File

// fs.appendFile('read.txt',' plz like ans share and subs my channel',
// (err)=>{
//     console.log('Data Added and Task Completed')
// });


fs.readFile('read.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});

