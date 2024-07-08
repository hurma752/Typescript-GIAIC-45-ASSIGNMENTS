// Question42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

function show_magicians(){
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great() {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

console.log("Names of magicians before making them great:");
show_magicians();

console.log("\nMaking them great...");

make_great();

console.log("\nNames of magicians after making them great:");
show_magicians();
