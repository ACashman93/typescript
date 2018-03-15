console.log(fullName("Andrew", "Cashman"));
console.log(otherFullName("Andrew", "Cashman"));
console.log(thirdFullName("Andrew", "Cashman"));
// Function declaration
function fullName(first, last) {
    return first + " " + last;
}
// Function expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
// All of these have the same output. Different ways to write the exact same thing
//# sourceMappingURL=019_fucntion_declaration_vs_expressions.js.map