// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, and it 
//should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.


function items_on_sandwich(...items: string[]){
    console.log("The Sandwich will contain");
    for (var i = 0; i < items.length; i++) {
            console.log(` - ${items[i]}`)
        }
        console.log("Enjoy your sandwich!");
}

items_on_sandwich ("Mayonnaise", "Lettuce", "Egg")
items_on_sandwich ("Chicken", "Lettuce")
items_on_sandwich ("Chicken", "Lettuce", "Sauce", "Egg", "Mayonnaise")


