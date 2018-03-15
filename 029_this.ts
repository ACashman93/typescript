class Invoice {
  total : number;

  constructor(total : number) {
    this.total = total;
  }

  printTotal() {
    console.log(this.total);
  }

//   printLater(time : number) {
//     setTimeout(function() {
//       console.log(this.total);
//     }, time);
//   }
// }

// using a fat arrow (=>) widens the scope of nested functions
// work around for "this" call in nested functions
printLater(time : number) {
    setTimeout(() => {
      console.log(this.total);
    }, time);
  }
}


var invoice = new Invoice(400);
invoice.printTotal();
invoice.printLater(2500);