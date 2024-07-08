//Question15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList: string[] = ["Hijab Shafique", "Urooj Fatima", "Bisal Noor"];

let guestWhoCantMakeIt: string = "Urooj Fatima";
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

let indexOfAbsentGuest: number = guestList.indexOf(guestWhoCantMakeIt);

if (indexOfAbsentGuest !== -1) {
    let newGuest: string = "Bushra Zafar";
    guestList[indexOfAbsentGuest] = newGuest;

    console.log("\nUpdated guest list and invitations:");
    for (let i = 0; i < guestList.length; i++) {
        console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nLooking forward to seeing you!\nBest regards,\nHurma Zafar`);
    }
} else {
    console.log("The absent guest was not found in the guest list.");
}

