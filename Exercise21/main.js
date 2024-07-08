"use strict";
let students = [
    {
        name: "Hurma Zafar",
        age: 20,
        teacher: "Sir hamzah"
    },
    {
        name: "Hijab Shafique",
        age: 19,
        teacher: "Miss Ambreen"
    },
    {
        name: "Urooj Fatima",
        age: 21,
        teacher: "Sir Iqbal"
    },
    {
        name: "Bisal Noor",
        age: 19,
        teacher: "Miss Komal"
    },
    {
        name: "Fiza Anwer",
        age: 20,
        teacher: "Sir Bilal"
    }
];
for (let i = 0; i < students.length; i++) {
    console.log(`Student Name: ${students[i].name}`);
    console.log(`Age: ${students[i].age}`);
    console.log(`Teacher: ${students[i].teacher}`);
    console.log('-----------------------------');
}
