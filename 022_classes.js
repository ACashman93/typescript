// constructor is a intializer for the class
var Invoice = /** @class */ (function () {
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ", " + city + ", " + state;
    }
    return Invoice;
}());
var googleInvoice = new Invoice("Google", "Mountain View", "State");
var yahooInvoice = new Invoice("Yahoo", "San Fransisco", "State");
console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);
//# sourceMappingURL=022_classes.js.map