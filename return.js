function add(num1, num2) {
  console.log(`Going to add :`, num1, num2);
   var sum = num1 + num2;
   
   return sum;
   // console.log(`Sum is :`, sum);
}

// var total = add(80, 20);
// console.log(`Total :`, total);

function bringSingara(money) {
   var singaraPrice = 10;
   var singaraQuantity = money / singaraPrice;
   return singaraQuantity;
}

var singaras = bringSingara(150);
console.log(`Singara:`, singaras);