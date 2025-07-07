const myobj1 = {
    name : "Shubham",
    age : 21,
    ispassed : true,
    "full name" : "Shubham Pandey"
}
console.log(myobj1.name);
console.log(myobj1["age"]);
console.log(myobj1["full name"]);

//symbol datatype declaration
const sym = symbol(key1);
const obj = {
    [sym]= key1,
 
}
