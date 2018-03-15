// interfaces are at the core of building angular programs
function profile(user) {
    return "Welcome, " + user.firstName + " " + user.lastName;
}
var realUser = {
    email: 'test@test.com',
    firstName: 'Andrew',
    lastName: 'Cashman'
};
var realUser2 = {
    email: 'test@example.com'
};
console.log(profile(realUser));
console.log(realUser.firstName);
console.log(realUser.lastName);
console.log(realUser.email);
console.log(realUser2.email);
//# sourceMappingURL=025_interfaces.js.map