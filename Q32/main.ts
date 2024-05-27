/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username. */


//• Make a list of five or more usernames called current_users.

let current_users: string[] = ["Ammar", "Kashif", "Altaf", "Babar", "Sharjeel"]

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are 
//also in the current_users list.

let new_users: string[] = ["Babar","Shahid","Kashif","Faisal","Kareem"]

// • Loop through the new_users list to see if each new username has already been used. If it has, print a 
// message that the person will need to enter a new username. If a username has not been used, print a 
// message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


for (let i = 0; i < new_users.length; i++) {
    if(current_users.includes(new_users[i])){
        console.log(`Sorry, The name ${new_users[i]} is in use currently, Please set a new name!`)
    }    
    else if(current_users.includes(new_users[i])){
        console.log(`The name ${new_users[i]} is available and you can have it.`)
    }
}