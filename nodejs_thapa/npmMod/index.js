

import c from 'chalk';
import validator from 'validator';

// const c = require('chalk');
// const validator = require('validator');

console.log(c.green.underline.inverse('Success'));
console.log(c.red.underline.inverse('False'));
console.log(c.bgMagenta.underline.inverse('False'));

const res = validator.isEmail("srijan_g.ece2020@msit.edu.in.com");
console.log((res == true) ? c.green.inverse(res) : c.red.inverse(res));




















