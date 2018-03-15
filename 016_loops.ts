// var x : number = 0;

// while (x < 10) {
//   console.log(x);
//   x++;
// }

let baseballPlayers : number[] = [3, 10, 4, 5, 1];
// for in 
// iterates over the array and returns the indexes of each
console.log("For/in:")
for (let player in baseballPlayers) {
  console.log(player);
}

// for of
// iterates over the array and returns the values in the array
console.log("For/of:")
for (let player of baseballPlayers) {
  console.log(player);
}
