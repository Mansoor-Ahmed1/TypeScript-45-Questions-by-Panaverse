//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
//reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of 
//any size with a different message.

function make_shirt(size:string = "Large", text: string = "I love Typescript") {
    console.log(`A ${size} sized shirt, having "${text}" written on it.`)    
}
make_shirt()
make_shirt("small")
make_shirt("XXL","I love Javascript")
