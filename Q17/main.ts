//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
//invite only two people for dinner.

let guests: string[] = ['Ahmed', 'Ammar', 'Taha', 'Samir', 'Kashif', 'Ali', 'Hyder', 'Sajid']
for (let i = 0; i < guests.length; i++) {
    console.log("Dear",guests[i], "Unfortunately, Our table won't be able to reach on time, because of which we have to restrict 2 people's visit")
}

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop 
//a name from your list, print a message to that person letting them know you’re sorry you can’t invite 
//them to dinner.



let removed_guest = guests.pop()
console.log("Sorry",removed_guest, "We can't accomodate you at the dinner")

removed_guest = guests.pop()
console.log("Sorry",removed_guest,"We can't accomodate you at the dinner")

//• Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i = 0;i<guests.length;i++){
    console.log("Dear", guests[i] , "," , "Despite our less accodomation, We are pleased to tell you that you are still invited.")
}

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
//actually have an empty list at the end of your program.

console.log(guests)