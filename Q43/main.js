/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
the array of magicians’ names. Because the original array will be unchanged, return the new array and store
it in a separate array.
*/
var magicians_names = ["David", "Zack", "Harry", "Dynamo"];
function make_great(array) {
    for (var i = 0; i < array.length; i++) {
        console.log("Great", array[i]);
    }
}
make_great(magicians_names);
// Call show_magicians() with each array to show that you have one array of the 
//original names and one array with the Great added to each magician’s name.
for (var i = 0; i < magicians_names.length; i++) {
    console.log("Great", magicians_names[i]);
}
