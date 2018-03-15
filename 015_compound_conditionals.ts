let email : string = 'test@test.com'
let password : string = "asdfasdf";

// if (password == "asdfasdf" || password == "qwerqwer") {
//   console.log("Your passsword is correct");
// } else {
//   console.log("Sorry, permission denied");
// } 

// if (password == "asdfasdf" && email == "test@test.com") {
//   console.log("You are authorized.");
// } else {
//   console.log("Sorry, permission denied");
// } 

if (!(email == "test@test.com")) {
  console.log('You are authorized');
}

// ! is a not operator. Very similar to using the unless statement in ruby