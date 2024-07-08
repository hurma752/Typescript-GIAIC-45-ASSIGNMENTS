//Question16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//  Add one new guest to the beginning of your array.
//  Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestList: string[] = ["Hijab Shafique", "Urooj Fatima", "Bisal Noor"];

let guestWhoCantMakeIt: string = "Urooj Fatima";
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

let indexOfAbsentGuest: number = guestList.indexOf(guestWhoCantMakeIt);

if (indexOfAbsentGuest !== -1) {
    let newGuest: string = "Bushra Zafar";
    guestList[indexOfAbsentGuest] = newGuest;

    console.log("\nGood news! We found a bigger dinner table.");

    guestList.unshift("Fiza Anwar");

    guestList.splice(Math.floor(guestList.length / 2), 0, "Ahmed Khan");

    guestList.push("Saba Noreen");

    console.log("\nUpdated guest list and invitations:");
    for (let i = 0; i < guestList.length; i++) {
        console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nLooking forward to seeing you!\nBest regards,\nHurma Zafar\n\n`);

    }
} else {
    console.log("The absent guest was not found in the guest list.");
}
