// Boolean
// True or false value
let paidAccount : boolean = false;

// Number
// Excaplsulates all numbers (float and decimal includes)
let age : number = 33;
var taxRate : number = 7.5;

// String
// same as in ruby, but need to declare
var fullName : string = "Andrew Cashman";

// Array
// Have to declare the type of data inside of the variable
var ages : number[] = [33, 28, 11];

// Tuple
// Have to know how many elements are going to be in your collection to begin with
// Can populate the intial array with the data types you want to assign to each index of the array
let player : [number, string, number, number];
player = [3, 'Correra', .333, 33];

// Enum
// Very similar to ruby. Allows you to set multiple values to an enum that you can call like variables
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any
// Can be very error prone. Only use when you don't have any other options (LOL)
var apiData : any[] = [123, 'Andrew', true]

// Void
// Isn't used with variables. Is used specifically called on functions
// A method of performing actions, but isn't returning a value
function printOut(msg: string) : void {
  console.log(msg);
}

