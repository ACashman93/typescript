// var fullName : string = "Andrew Cashman";
// let paidAccount : boolean = true;
// const versionNumber : number = 1.3;

// fullName = "Gaylen Cashman";
// paidAccount = false;

// console.log(fullName);
// console.log(paidAccount);
// console.log(versionNumber);

// let doesn't allow you to redefine the variable within the same scope
// var does allow you to redefine the variable, but only within the same data type
// const can't be redefined at all


function printName(f, l) {
  var greeting : string = "Hi there, "
  console.log(greeting + f + " " + l);

  var greeting : string = "Hey there, "
  console.log(greeting + f + " " + l);
}

printName("Andrew", "Cashamn");