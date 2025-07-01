let str =`Shubham`;
console.log(str);

let newstr = str;
newstr = `chubbu`;
console.log(newstr);

//Stack memory me sab save ho rha hai esliye str ki value me naa change hokr ek nae copy ban rhi h uski aur changes usi me ho rha hai

//(A) prototypes of string:-
console.log(`the venue is ${str} and time is ${newstr}`);

console.log(`the venue is ${str.length} and time is ${newstr.length}`);
console.log(str.toUpperCase());
console.log(newstr.charAt(3));
console.log(str.indexOf(`m`));
console.log(newstr.substring(3,2));
console.log(str.slice(-5,7));

let str3 =`   Shubham   `;
console.log(str3);
console.log(str3.trim());
console.log(str3.replace(`u`,`i`));

const str4 = `this is a example of the split prototype`;
console.log(str4.split(` `));