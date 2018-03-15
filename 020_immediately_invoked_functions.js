// Functions that are run immediately when the interrpretor reaches that point in the code
var names = ["Andrew", 'Gaylen', 'Hannah'];
var counter = 0;
(function () {
    for (var name_1 in names) {
        counter++;
    }
})();
console.log(counter);
//# sourceMappingURL=020_immediately_invoked_functions.js.map