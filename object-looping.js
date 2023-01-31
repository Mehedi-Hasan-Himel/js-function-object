// Array vs Object

var shoppingItems = [`books`, `sunglasses`, `Keyboard`, `mouse`, `pen`, `shoes`];
var frinedsAge = [12, 13, 14, 15, 16, 17, 18, 19, 20];


var shoppingCart = {
  books: 3,
  sunglasses: 1,
  Keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
}; 


const keys = Object.keys(shoppingCart);
// console.log(keys);

const values = Object.values(shoppingCart);
// console.log(values);

// for (let i = 0; i < keys.length; i++) {
//    const peopertyName = keys[i];
//    var propertyValue = shoppingCart[peopertyName];
//    console.log(peopertyName, propertyValue);
// }

// for in loop
for (var propertyName in shoppingCart) {
   const value  = shoppingCart[propertyName];
   console.log(propertyName, value);
}