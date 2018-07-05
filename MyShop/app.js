var faker = require('faker');

var productName = faker.commerce.productName();
var productPrice = faker.commerce.price();

console.log("====================");
console.log("WELCOME TO MY SHOP!");
console.log("====================");
 for(var i = 0; i<10; i++){
     console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}