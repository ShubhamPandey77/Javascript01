let name = "shubham"
//type casting it
let numname = Number(name)
console.log(typeof (name))
console.log(numname);
// Here Output is not a number(NaN) since shubham can be converted into the number datatype but this cant be became a number\
let age = null;
let newAge = Number(age);
console.log(typeof newAge)
console.log(newAge);
//undefined ke case me output underfined aa rha hai but null ke case me 0;
let height = 0;
let newHeight = Boolean(height);
console.log(typeof newHeight);
console.log(newHeight);
//bool ke case me other than zero input always output comes as true but for 0 input it will come as the false and agr empty
// input rakhte hai toh sidhe se 0 false print hoga;

