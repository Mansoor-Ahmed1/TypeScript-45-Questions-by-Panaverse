/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified. */
var magicians_names = ["David", "Zack", "Harry", "Dynamo"];
function make_great(array) {
    for (var i = 0; i < array.length; i++) {
        console.log("Great", array[i]);
    }
}
make_great(magicians_names);
