//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and 
//then use a for loop to print the name of each pizza.

let favPizzas: string[] = ["Fajita", "Malai Boti", "Creamy Tikka"];
for (let i = 0; i < favPizzas.length; i++) {
    console.log(favPizzas[i])    
}

//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name 
//of the pizza. For each pizza you should have one line of output containing a simple statement like I like 
//pepperoni pizza.
for (let i = 0; i < favPizzas.length; i++) {
    console.log(`I love eating ${favPizzas[i]} Pizza`)
}

//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The 
//output should consist of three or more lines about the kinds of pizza you like and then an additional 
//sentence, such as I really love pizza!
console.log("Pizza is one of my most favorite foods. I really love the variety and flavors available");
console.log("Fajita, Malai Boti, and Creamy Tikka are just a few of my favorites.");
console.log("I really love pizza! while creamy tikka is my most favourite one becuase of amazing toppings");