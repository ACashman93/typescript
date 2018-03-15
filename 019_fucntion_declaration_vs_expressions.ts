// Function declaration, hoisting(can be called on before the function is declared)
function fullName(first : string, last : string ) : string {
  return first + " " + last;
}


// Function expression, have to be defined before they can be called
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
  return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
  return first + " " + last;
}

console.log(fullName("Andrew", "Cashman"));
console.log(otherFullName("Andrew", "Cashman"));
console.log(thirdFullName("Andrew", "Cashman"));
// All of these have the same output. Different ways to write the exact same thing