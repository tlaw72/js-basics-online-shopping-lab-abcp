var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var item = { [itemName]: itemPrice };
 cart.push(item);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  for (let i = 0; i < cart.length; i++) {
    if (cart.length>0) {
      return `In your shopping cart you have ${cart.itemName[i]} at ${cart.itemName[i]}`;
    } else {
      return `Your shopping cart is empty.`;
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
