console.log(2>1);
console.log(2>3);
console.log("2">1)
console.log("02">1)
console.log("2">3)
console.log("2">"1")

// Basically these comparison operators compares the values independently of the datatypes.
console.log(null == 0)
console.log(null >= 0);
console.log(null <= 0);
console.log(null > 0);
//Comparison and double equality checkl works differently
// comparison operators takes null as number,i.e. 0


console.log("5" === 5)
console.log(7 !== "8")
//abhi sirf comparison operator hota toh 16th line ka output true aata but here we are using srict operator which compares the 
//value as well as datatype .. so dattype are different thats why output is false;
