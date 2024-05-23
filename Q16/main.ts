let guests : string[] = ["Ammar","Samir","Kashif","Ali","Hyder"]

for (let index = 0; index < guests.length; index++) {
    console.log("Dear",guests[index],"I am glad to tell you that we have managed to get a bigger table for our dinner enabling us to invite more guests")
}
console.log(guests)

//• Add one new guest to the beginning of your array.
guests.unshift("Ahmed")
console.log(guests)

//• Add one new guest to the middle of your array.
guests.splice(2,0,"Taha") // start at index "2", delete 0 items. Add Taha instead
console.log(guests)

// • Use append()/ to add one new guest to the end of your list.
guests.push("Sajid")
console.log(guests)


//• Print a new set of invitation messages, one for each person in your list.

for (let index = 0; index < guests.length; index++) {
    console.log("Dear",guests[index],"I am glad to invite you to my home tomorrow for dinner")
}   