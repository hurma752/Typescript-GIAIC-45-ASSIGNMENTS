"use strict";
// Question43:Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push(magicians[i] + " the Great");
    }
    return great_magicians;
}
console.log("Original names of magicians:");
show_magicians(magicians);
let great_magicians = make_great([...magicians]); // Create a copy of the original array
console.log("\nModified names of magicians:");
show_magicians(great_magicians);
