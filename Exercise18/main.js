"use strict";
// //Question18:Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Define an array of places
let places = [
    "Italy",
    "Japan",
    "France",
    "Australia",
    "Brazil"
];
console.log("Original order:");
console.log(places.join(" "));
// Print alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log([...places].sort().join(", "));
// Show original order is unchanged
console.log("\nOriginal order (unchanged):");
console.log(places.join(", "));
// Print reverse alphabetical order without modifying the original list
console.log("\nReverse alphabetical order:");
console.log([...places].sort().reverse().join(", "));
// Show original order is still unchanged
console.log("\nOriginal order (still unchanged):");
console.log(places.join(", "));
// Reverse the order of the list
places.reverse();
console.log("\nReversed order:");
console.log(places.join(", "));
// Reverse the order again to bring it back to original
places.reverse();
console.log("\nReversed back to original order:");
console.log(places.join(", "));
// Sort the array in alphabetical order
places.sort();
console.log("\nSorted in alphabetical order:");
console.log(places.join(", "));
// Sort the array in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(places.join(", "));
