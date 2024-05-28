"use strict";
/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username. */
//• Make a list of five or more usernames called current_users.
let current_users = ["Ammar", "Kashif", "Altaf", "Babar", "Sharjeel"];
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are 
//also in the current_users list.
let new_users = ["Babar", "Shahid", "Kashif", "Faisal", "Kareem"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a 
// message that the person will need to enter a new username. If a username has not been used, print a 
// message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let lowered_current_users = current_users.map(value => value.toLowerCase());
let lowered_new_users = new_users.map(value => value.toLowerCase());
console.log(lowered_current_users);
console.log(lowered_new_users);
for (let i = 0; i < lowered_new_users.length; i++) {
    if (lowered_current_users.includes(lowered_new_users[i])) {
        console.log(`Sorry, The name ${lowered_new_users[i]} is in use currently, Please set a new name!`);
    }
    else if (!lowered_current_users.includes(lowered_new_users[i])) {
        console.log(`The name ${lowered_new_users[i]} is available and you can have it.`);
    }
    else { }
}
