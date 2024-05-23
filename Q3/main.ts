let person_name = "aJMal AlI cHaUdHRy";

let lowerCased = person_name.toLowerCase();
console.log(lowerCased)

let upperCased = person_name.toUpperCase();
console.log(upperCased)

function toTitleCase(string) {
    return string
    .toLowerCase() // convert all charachters to lower case
    .split(" ") // break down each word into array
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // uppercase first word 
    .join(" ")  // again join the sentence
}

let titleCased = toTitleCase(person_name)
console.log(titleCased)