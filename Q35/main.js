// Animals: Think of at least three different animals that have a common characteristic. Store the names of 
//these animals in a list, and then use a for loop to print out the name of each animal. 
var animals = ["Shark", "Dolphin", "Fish"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
for (var i = 0; i < animals.length; i++) {
    if (animals[i] == "Shark") {
        console.log("".concat(animals[i], " can be a dangerous animal to pet"));
    }
    else if (animals[i] == "Dolphin") {
        console.log("".concat(animals[i], " can be a quite friendly animal for humans"));
    }
    else if (animals[i] == "Fish") {
        console.log("".concat(animals[i], " can be a good option for humans to pet"));
    }
}
//• Add a line at the end of your program stating what these animals have in common. You could print a 
//sentence such as Any of these animals would make a great pet!
console.log("All three ".concat(animals[0], ",").concat(animals[1], " & ").concat(animals[2], " have one thing in common that they need \nwater for swimming, Although we might need huge spaces but any of them can be a good option to pet."));
