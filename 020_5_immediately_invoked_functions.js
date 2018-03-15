// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName("Andrew", "Cashman"));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})("Andrew", "Cashman");
//# sourceMappingURL=020_5_immediately_invoked_functions.js.map