const arr = [2,6,8,9,0];
const myarray = ["hitman","King","Thala"];

// console.log(arr);
// console.log(myarray);

// const newarray = new Array(5,4,2,1,9);
// console.log(newarray);
// console.log(typeof(arr));
//@1. arr.push(7);
// console.log(arr);
//@2. myarray.pop();

//@3. myarray.unshift(8);
//@4. myarray.shift();
// console.log(myarray);

//@5. Slice and splice concept
// const myarr = arr.slice(0,3);
// console.log(arr);
// console.log(myarr);

//@6. const myarr1 = arr.splice(0,3);
// console.log(arr);
// console.log(myarr1);

//@7. Concat
// const another_arr = arr.concat(myarray);
// console.log(another_arr);

//@8. Flat
// const arri = [4,5,6,[5,3,2,[4,2,6,1],4,2],4,2];
// const another_arr1 = arri.flat(2);  //()->esme depth likhte hai..ki array ke ander kitne array h..default case me infinite lelo
// //ginana nhi padega
// console.log(another_arr1);

//@9. Array Conversion and formation
console.log(Array.isArray("Shubham"));
console.log(Array.from("Shubham"));
console.log(Array.from({name:"Shubham"}));  //interesting
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));