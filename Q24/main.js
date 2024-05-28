/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try
more comparisons, write more tests. Have at least one True and one False result for each of the following:*/
//• Tests for equality and inequality with strings
var a = "Student";
var b = "student";
console.log(a == a); //true
console.log(a == b); //false (case sensitive)
console.log("-");
//• Tests using the lower case function
a = "Student";
b = "student";
console.log(a.toLowerCase() == b); // student == student
console.log(a == b.toLowerCase()); // Student == student
console.log("-");
/*• Numerical tests involving equality and inequality, greater than and less than, greater than or
equal to, and less than or equal to*/
var c = 12;
var d = 13;
console.log(c == d); //false
console.log(c === d); //false
console.log(c !== d); // true
console.log(c >= d); // false
console.log(c <= d); // true
console.log(c >= d); // false
console.log(c >= d); // false
console.log("-");
//• Tests using "and" and "or" operators
console.log(1 < 2 && 3 < 4); // true
console.log(1 > 2 && 3 < 4); // false
console.log(1 < 2 || 3 < 4); // true
console.log(1 > 2 && 3 > 4); // false
console.log("-");
//• Test whether an item is in a array
var array = [1, 2, 3, 4, 5];
console.log(2 in array);
// • Test whether an item is not in a array
console.log(7 in array);
