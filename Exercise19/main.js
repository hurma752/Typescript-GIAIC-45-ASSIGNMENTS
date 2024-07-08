"use strict";
//Question19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestList = ["Hijab Shafique", "Urooj Fatima", "Bisal Noor"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nLooking forward to seeing you!\nBest regards,\nHurma Zafar\n`);
}
console.log(`\nTotal number of people invited to dinner: ${guestList.length}`);
