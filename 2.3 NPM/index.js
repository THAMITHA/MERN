//var generateName = require('sillyname');

import generateName from "sillyname";
import superheroes from "superheroes";
var sillyName = generateName();
var name = superheroes.random();

console.log(`my name is ${sillyName}.`);
console.log(`i am ${name}.`);
