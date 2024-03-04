const bioData = {
    name: "vinod",
    age: 26,
    channel: "thapa technical",
};

// console.log(bioData);
// console.log(bioData.channel);
// console.log(bioData.name);


//* Object -> JSON

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// { "name": "vinod", "age": 26, "channel": "thapa technical" }

//console.log(jsonData.channel);// undefined


//* JSON -> OBJECT

// const objData = JSON.parse(jsonData);

// console.log(objData);

//{ name: 'vinod', age: 26, channel: 'thapa technical' }


//? Task

// 1. convert to JSON => Done
// 2. dusre fileme add karna
// 3. readfile
// 4. again convert back to js obj orig
// 5. console.log me show karna parega



const fs = require('fs');

const jsonData = JSON.stringify(bioData);

// fs.writeFile('json1.json', jsonData, (err) => {
//     if (err) throw err;
//     console.log("file created");
// });


fs.readFile('json1.json', 'utf-8', (err, data) => {
    // if (err) throw err;
    // console.log(data);

    const orgData = JSON.parse(data);
    console.log(orgData);
})


// const objData = JSON.parse(jso)











