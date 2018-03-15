var Invoice = /** @class */ (function () {
    function Invoice(total) {
        this.total = total;
    }
    Invoice.prototype.printTotal = function () {
        console.log(this.total);
    };
    //   printLater(time : number) {
    //     setTimeout(function() {
    //       console.log(this.total);
    //     }, time);
    //   }
    // }
    // using a fat arrow (=>) widens the scope of nested functions
    // work around for "this" call in nested functions
    Invoice.prototype.printLater = function (time) {
        var _this = this;
        setTimeout(function () {
            console.log(_this.total);
        }, time);
    };
    return Invoice;
}());
var invoice = new Invoice(400);
invoice.printTotal();
invoice.printLater(2500);
//# sourceMappingURL=029_this.js.map