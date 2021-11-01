const groceries = {
  "Orange Juice": {
    price: 1.5,
    discount: 10,
  },
  Chocolate: {
    price: 2,
    discount: 0,
  },
};

const shoppingBag = [
  { product: "Chocolate", quantity: 3 },
  { product: "Orange Juice", quantity: 23 },
];

function getTotalPriceOfShoppingBag(shoppingBag) {
  let result = 0;
  for (let groce in groceries) {
    shoppingBag.map(i => {
      if (i.product === groce) {
        if (groceries[groce].discount > 0) {
          groceries[groce].price -=
            groceries[groce].price / groceries[groce].discount;
        }
        result += groceries[groce].price * i.quantity;
      }
    });
  }
  return result
}

console.log(getTotalPriceOfShoppingBag(shoppingBag));
