// Question41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians:string[]=["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

function show_magicians(){
    for(let i=0; i<magicians.length;i++){
        console.log(magicians[i]);
    }
}

console.log("Names of magician...");
show_magicians();