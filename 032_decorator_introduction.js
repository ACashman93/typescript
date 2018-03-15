var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Post = /** @class */ (function () {
    function Post() {
    }
    Post.prototype.someFunction = function () { };
    __decorate([
        processOne(),
        processTwo()
    ], Post.prototype, "someFunction", null);
    return Post;
}());
function processOne() {
    console.log("processOne has run");
    // a decorator must return a function
    return function (target, propertyKey, descriptor) {
        console.log("processOne has been called");
    };
}
function processTwo() {
    console.log("processTwo has run");
    return function (target, propertyKey, descriptor) {
        console.log("processTwo has been called");
    };
}
//# sourceMappingURL=032_decorator_introduction.js.map