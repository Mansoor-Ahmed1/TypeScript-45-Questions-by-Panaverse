var person_name = "aJMal AlI cHaUdHRy";
var lowerCased = person_name.toLowerCase();
console.log(lowerCased);
var upperCased = person_name.toUpperCase();
console.log(upperCased);
function toTitleCase(string) {
    return string
        .toLowerCase() // convert all charachters to lower case
        .split(" ") // break down each word into array
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); }) // uppercase first word 
        .join(" "); // again join the sentence
}
var titleCased = toTitleCase(person_name);
console.log(titleCased);
