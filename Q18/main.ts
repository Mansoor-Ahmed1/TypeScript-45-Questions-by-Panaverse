// Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

let ideal_places: string[] = ["Eiffel Tower", "Statue of Liberty", "Silicon Vally", "Badshahi Mosque", "Hagia Sofia Mosque"];

//• Print your array in its original order.
console.log("Original List")
console.log(ideal_places)

//• Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order without modification of original list")
let sortedArray = ideal_places.slice().sort()
console.log(sortedArray) //slice() creates a new array resulting in original array being unchanged.

//• Show that your array is still in its original order by printing it.
console.log("Origianl list")
console.log(ideal_places)

//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reversed order without modification of original list")
let reversed_array = ideal_places.slice().reverse()
console.log(reversed_array)

//• Show that your array is still in its original order by printing it again.
console.log("Original list")
console.log(ideal_places)

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversed list with permanent change")
let reversed_actual_array=ideal_places.reverse()
console.log(reversed_actual_array)
console.log("Verifying permanent change")
console.log(ideal_places) //permanently changed

//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Second time reversing list(back to previous order)")
let reversed_actual_array2=ideal_places.reverse()
console.log(reversed_actual_array2)

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
//changed.
console.log("Sorted list with permanent change")
let sorted_final_array = ideal_places.sort()
console.log(ideal_places)

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
//order has changed.
console.log("Final reversed list with permanent affect")
let reversed_final_array = ideal_places.reverse()
console.log(ideal_places)