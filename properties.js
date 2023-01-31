var shoppingCart = {
  books: 3,
  sunglasses: 1,
  Keyboard: 5,
  mouse: 1,
  pen: 25,
};

// when you know the property name , use dot notaion to access the value of the property like this.
var penCount = shoppingCart.pen;

// alternative system to access the value of the property
var penCount2 = shoppingCart[`pen`];


// to access the value of the property using a variable
var propertyName = `mouse`
var propertyValue = shoppingCart[propertyName];
// console.log(propertyValue);
var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);
// console.log(shoppingCart, penCount);


// set property value using dot notation
shoppingCart.mouse = 15;
console.log(shoppingCart);
// set property value using bracket notation
shoppingCart[propertyName] = 89;
console.log(shoppingCart); 