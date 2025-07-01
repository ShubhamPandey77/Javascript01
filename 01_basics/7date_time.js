let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());

// console.log(typeof (mydate));   // Object type

// //declaration of time and date

// let newcreateDate = new Date(2023,0,4,5,45);
// console.log(newcreateDate.toLocaleString());

let newDates = new Date("05-04-2025");
// console.log(newDates.toString());

//timestamp ka khel
// let mytimestamp = Date.now();
// console.log(mytimestamp);   //output will be in milliseconds.
// console.log(mydate.getTime()); 
// //In seconds
// console.log(Math.floor(Date.now()/1000));

//customization in time
console.log(newDates.toLocaleString(`default`,{weekday: "narrow", year:"numeric"}));


