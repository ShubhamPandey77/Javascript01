//COMBINATION OF OBJECTS USING ASSIGN AND SPREAD OPERATOR
// const obj1 = {1:"a",2:"b"};
// const obj2 = {3:"c",4:"d"};
// const obj3 = {5:"e",6:"f"};
// // const obj4= Object.assign(obj1,obj2,obj3);
// //++++++++++++++++++ OR ++++++++++++++++++++++++++
// const obj5 = {...obj1,...obj2,...obj3};

// console.log(obj5);

//ACCESSING KEYS,VALUES AND ENTRIES.\
// ******ALWAYS REMEMBER THE RESULT WILL ALWAYS COMES INTO THE ARRAY.SO ALL ARRAY OPERATIONS ARE POSSIBLE ON RESULT.********
const user1 = {
    email:"abc@gmail.com",
    name:"Shubham",
    branch:"Csai",
    Age:21,
    isloggedIn:true
}
// console.log(Object.keys(user1));
// console.log(Object.values(user1));
// console.log(Object.entries(user1));

// console.log(user1.hasOwnProperty(`isloggedin`));

//Last topic is the destructuring of object.