
// har ek individual file module hai and code jo abh lekha tha o private hota hai

//? Define Add Method

const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}


const mult = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    return a / b;
}



const name = "Vinod";

//export default add; //^ Export Add Method

// module.exports = add; //^ Export Add Method

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;
// module.exports.div = div;

module.exports = {add,sub,mult,div,name};

