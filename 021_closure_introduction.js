// Encapsulates data and behaviors in the same object
// All functions in javascript are closures
// // Funcitons have access to any public variables in the outer scope
// function nameFunction (name : string) : void {
//   var n : string = name;
//   function printName() {
//     console.log(n);
//   }
//   printName();
// }
// nameFunction("Andrew");
// // The inner functions maintain access to the outer scope even AFTER the values are returned!
// function nameFunction (name : string) {
//   var n : string = name;
//   return function() {
//     console.log(n);
//   }
// }
// var nameAgain = nameFunction("Hannah");
// nameAgain();
// * * * *
// Closures allow for keeping elements of state
function lineup() {
    var nowBatting = 1;
    return {
        nextBatter: function () { nowBatting++; },
        currentBatter: function () { return nowBatting; }
    };
}
var batters = lineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
var pitchers = lineup();
console.log(pitchers.currentBatter());
//# sourceMappingURL=021_closure_introduction.js.map