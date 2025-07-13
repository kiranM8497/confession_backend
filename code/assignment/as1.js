class Product {
  price;
  total;

  constructor(price, total) {
    this.total = total;
    this.price = price;
  }

  sell() {
    this.total -= 1;
  }

  get stock() {
    if (this.total > 0) {
      return "in Stock";
    } else {
      return "Not in stock";
    }
  }
}

const fileHolder = new Product(100, 5);
// console.log(fileHolder);
fileHolder.sell();
// console.log("after selling 1", fileHolder);
let stock = fileHolder.stock;
console.log(stock);
fileHolder.sell();
fileHolder.sell();
fileHolder.sell();
fileHolder.sell();

stock = fileHolder.stock;
console.log(stock);
console.log(fileHolder.total);
