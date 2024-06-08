/*Cars: Write a function that stores information about a car in a Object. The function should always
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an
optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
function createCar(manufacturer, model) {
    var others = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        others[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, others_1 = others; _a < others_1.length; _a++) {
        var other = others_1[_a];
        car[other[0]] = other[1];
    }
    return car;
}
var myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2024]);
console.log(myCar);
