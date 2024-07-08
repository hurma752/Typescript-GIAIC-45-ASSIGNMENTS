"use strict";
//Question03: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. 
let myname = "hurma zafar";
//lowercase
let lowercase = myname.toLowerCase();
console.log(lowercase);
//uppercase
let uppercase = myname.toUpperCase();
console.log(uppercase);
//titilecase
let words = myname.split(" ");
let titlecase = "";
for (let i = 0; i < words.length; i++) {
    titlecase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    if (i < words.length - 1) {
        titlecase += " ";
    }
}
console.log(titlecase);
