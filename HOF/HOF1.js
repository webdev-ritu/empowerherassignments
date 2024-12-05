/**You are given an array of objects representing products. Each product has a name and a price. Write a function processProducts that uses map() to create a new array of product names, and then uses forEach() to log each product name along with a message indicating whether the price is above or below $50.

Steps:

Use map() to extract the product names.
Use forEach() to iterate over the products and log messages based on the price of each product. */

function processProducts(products){
    //use map()
    const productNames = products.map(product => product.name);
    //use forEach()
    productNames.forEach((name, index) => {
        const price  = products[index].price;
        const message = price > 50?'above $50' :
        'below $50';
        console.log(`${name} is ${message}`);
        
    });
}
const products = [{name:"phone", price: 180000},{name:"charger",price:20}];
processProducts(products);