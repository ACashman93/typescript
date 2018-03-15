@detailedLog('billing')
class AccountsPayable {
  constructor() {}
}

@detailedLog('warehouse')
class ProductManager {
  constructor() {}
}

function detailedLog(dashboard : string) {
  if(dashboard == 'billing') {
    console.log('Working in the billing department');
    return function (target : Object) {};
  } else {
    return function (target : Object) {};
  }
}

// Only put a class decorator on something you want to run
// It runs at run time!!!!!

var post = new AccountsPayable;
var pm = new ProductManager;