class Report {
  companyProfile : string;

  constructor(public name : string) {
    this.companyProfile = name;
  }
}

// Child class should be a type of the parent class
// In this case, an invoice is a specialized type of report
class Invoice extends Report {
  constructor(public name : string, public total : number) { super(name); }

  printInvoice() {
    return this.name + ", " + this.total
  }
}
// super calls the parent class. an attr from the parent class

class BillOfLading extends Report {
  constructor(public name : string, public city : string, public state : string) { super(name) }

  printBol() {
    return this.name + ", " + this.city + ", " + this.state;
  }
}

var invoice = new Invoice('Google', 200);
var bol = new BillOfLading('Google', 'Portland', 'OR');

console.log(invoice.printInvoice());
console.log(bol.printBol());
