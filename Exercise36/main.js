"use strict";
// Question36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}
make_shirt("Medium", "Hello, World!");
make_shirt("Large", "TypeScript Rocks!");
make_shirt("Small", "Keep Calm and Code On");
