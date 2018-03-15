// constructor is a intializer for the class
class Invoice {
  companyProfile : string;

  constructor(public name, public city, public state) {
    this.companyProfile = name + ", " + city + ", " + state;
  }
}

var googleInvoice = new Invoice("Google", "Mountain View", "State");
var yahooInvoice = new Invoice("Yahoo", "San Fransisco", "State");

console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);