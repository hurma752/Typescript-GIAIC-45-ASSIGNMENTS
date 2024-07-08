//Question03: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. 
let myname:string = "hurma zafar";
//lowercase
let lowercase:string = myname.toLowerCase();
console.log(lowercase);
//uppercase
let uppercase:string=myname.toUpperCase();
console.log(uppercase);
//titilecase
let words: string[] = myname.split(" ");
let titlecase: string = "";
for (let i = 0; i < words.length; i++) {
    titlecase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    if (i < words.length - 1) {
        titlecase += " ";
    }
}
console.log(titlecase);