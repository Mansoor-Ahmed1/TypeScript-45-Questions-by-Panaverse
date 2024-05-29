//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.

let magicians_names: string[] = ["David", "Zack", "Harry", "Dynamo"]

function show_magicians(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
show_magicians(magicians_names)