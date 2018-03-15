// Functions that are run immediately when the interrpretor reaches that point in the code

var names : string[] = ["Andrew", 'Gaylen', 'Hannah'];
var counter : number = 0;

(function() {
  for (let name in names) {
    counter++;
  }
})();

console.log(counter);