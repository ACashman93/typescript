// var x : number = 0;
// while (x < 10) {
//   console.log(x);
//   x++;
// }
var baseballPlayers = [3, 10, 4, 5, 1];
// for in 
// iterates over the array and returns the indexes of each
console.log("For/in:");
for (var player in baseballPlayers) {
    console.log(player);
}
// for of
// iterates over the array and returns the values in the array
console.log("For/of:");
for (var _i = 0, baseballPlayers_1 = baseballPlayers; _i < baseballPlayers_1.length; _i++) {
    var player = baseballPlayers_1[_i];
    console.log(player);
}
//# sourceMappingURL=016_loops.js.map