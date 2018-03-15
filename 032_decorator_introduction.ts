class Post {
  @processOne()
  @processTwo()
  someFunction() {}
}

function processOne() {
  console.log("processOne has run");
  // a decorator must return a function
  return function(target, propertyKey : string, descriptor : PropertyDescriptor) {
    console.log("processOne has been called")
  }
}

function processTwo() {
  console.log("processTwo has run");
  return function(target, propertyKey : string, descriptor : PropertyDescriptor) {
    console.log("processTwo has been called")
  }
}

// decorator design pattern



// class RealPost {
//   @admin()
//   delete() {}
// }