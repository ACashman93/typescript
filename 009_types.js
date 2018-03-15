// Boolean
// True or false value
var paidAccount = false;
// Number
// Excaplsulates all numbers (float and decimal includes)
var age = 33;
var taxRate = 7.5;
// String
// same as in ruby, but need to declare
var fullName = "Andrew Cashman";
// Array
// Have to declare the type of data inside of the variable
var ages = [33, 28, 11];
// Tuple
// Have to know how many elements are going to be in your collection to begin with
// Can populate the intial array with the data types you want to assign to each index of the array
var player;
player = [3, 'Correra', .333, 33];
// Enum
// Very similar to ruby. Allows you to set multiple values to an enum that you can call like variables
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approved"] = 0] = "Approved";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job = ApprovalStatus.Pending;
// Any
// Can be very error prone. Only use when you don't have any other options (LOL)
var apiData = [123, 'Andrew', true];
// Void
// Isn't used with variables. Is used specifically called on functions
// A method of performing actions, but isn't returning a value
function printOut(msg) {
    console.log(msg);
}
//# sourceMappingURL=009_types.js.map