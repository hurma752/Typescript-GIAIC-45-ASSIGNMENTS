"use strict";
//Question06:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let person_name = "\t\tHurma Zafar\n\n";
console.log("Person's name:", person_name);
let Stripped_name = person_name.trim();
console.log("Stripped name:", Stripped_name);
