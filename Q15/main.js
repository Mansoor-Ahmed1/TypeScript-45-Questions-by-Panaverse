var guests = ["Ammar", "Samir", "Sarim", "Kashif", "Ali"];
// let Sarim be the one not being able to attend the dinner
guests.splice(2, 1); // start removing element from index 2(first param), and remove 1 element(second param)
console.log(guests);
//now i can invite another person as Sarim's place is empty
guests.push("Hyder");
console.log(guests);
for (var index = 0; index < guests.length; index++) {
    console.log("As Salam-o-Alaikum dear", guests[index], "You're invited on tomorrow's dinner at my place.");
}
