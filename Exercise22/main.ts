//Question22:Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let countries: string[] = ["Canada", "Japan", "Germany", "Brazil", "Australia", "India", "South Africa"];

console.log(countries[7]); // error

console.log(countries[6]); 

console.log("\n")
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}
