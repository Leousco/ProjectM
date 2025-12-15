<!-- VARIABLES -->

let productName = "Hoodie";

const productPrice = "$500";

const inStock = true;

console.log(productName);
console.log(productPrice);
console.log(inStock);



<!-- DATA TYPES -->

const sizes = ["S", "M", "L"];

const product = {name:"Sticker", price:90};

let discount = null;

const description = undefined;

console.log(sizes);
console.log(product);
console.log(discount);
console.log(description);



<!-- OPERATORS -->

let price = 350;

let quantity = 2;

const total = (quantity * price);

const isAffordable = (total < 1000);

console.log(total);
console.log(isAffordable) 



<!-- CONDITIONALS -->

let stock = 1;

let price = 450;

let userMoney = 500;

if (stock <= 0){                   // condition
    console.log("Out of stock");   // code that runs if condition is true
} 
else if (stock > 0 && userMoney >= price){
    console.log("Purchase Successful");
}
else if (userMoney < price){
    console.log("Not enough money (broke ass)");
}



<!-- FUNCTIONS -->

function buyProduct(price, userMoney, stock){
    if (stock <= 0){
        return "Out of Stock";
    } 
    else if (userMoney >= price){
        return "Purchase Successful";
    }
    else {
        return "Not enough money";
    }
}

console.log(buyProduct(400, 500, 3));



<!-- ARRAYS -->

const products = ["Jacket", "Cap", "Mystery Box"];

products.push("Shoes");

console.log(products[0]);

console.log(products);

console.log(products.length)

for (let i = 0; i < products.length; i++){
    console.log(products[i]);
}



<!-- OBJECTS -->

const productList = [
    {name: "Shirt", price: 600, stock: 5},
    {name: "Lamp", price: 700, stock: 3},
    {name: "Marbles", price: 900, stock: 55}
]

console.log(productList);
console.log(productList.length);

for (let i = 0; i < productList.length; i++){
    const product = productList[i];
    console.log(`Product: ${product.name}, Price: ${product.price}, Stock: ${product.stock}`);
}



<!-- DYNAMIC WEB PAGE JS -->

const productList = [
    {name: "Jacket", price: 150, stock: 459},
    {name: "Pants", price: 450, stock: 9},
    {name: "Shoes", price: 200, stock: 890},
]

console.log(productList);

const container = document.getElementById("product-container");

for (let i = 0; i < productList.length; i++){
    const product = productList[i];

    const productDiv = document.createElement("div");

    productDiv.innerHTML = `
        <h3> ${product.name} </h3>
        <p> Price: ${product.price} </p>
        <p> Stock: ${product.stock} </p>
        <button> Add to cart </button>
        <hr>
    `;

    container.appendChild(productDiv);
}



<!-- FIXED LAYOUT WITH BOOTSTRAP -->

const productList = [
    {name: "Jacket", price: 150, stock: 459},
    {name: "Pants", price: 450, stock: 9},
    {name: "Shoes", price: 200, stock: 890},
]

console.log(productList);

const container = document.getElementById("product-container");

for (let i = 0; i < productList.length; i++){
    const product = productList[i];

    // create a column div
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-4 mb-4";

    colDiv.innerHTML = `
        <div class="card h-100">
            <div class="card-body" style="background-color: rgb(189, 219, 245);">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Price: ${product.price}</p>
                <p class="card-text">Stock: ${product.stock}</p>
                <button class="btn btn-primary"> Add to Cart </button>
            </div.
        </div>
    `;

    container.appendChild(colDiv);
}



 <!-- ARRAY LOOP -->
const color = ["Red", "Blue", "Green"];

for (let i = 0; i < color.length; i++){
    console.log(color[i]);
}

console.log("=====")

<!-- OBJECTS FOR LOOP -->
const user = {name: "Alicia", age: 18, role: "Admin"};

for(let key in user){
    console.log(key + ": " + user[key]); // key is the property name and "user[key]" is grabbing the value of that property
}

console.log("=====")


<!-- ARRAY OF OBJECTS FOR LOOP -->
const products = [
    {name: "Cap", price: 70},
    {name: "Shoes", price: 90},
    {name: "Jacket", price: 100}
]

for (let i = 0; i < products.length; i++){
    const product = products[i]; // grab the current object first
    console.log(`Product: ${product.name}, Price: ${product.price}`); // then print
}


<!-- A basic add to cart function -->
function addProductToCart(product, cart){
    const cartItem = cart.find(item => item.name === product.name)

    if(cartItem){
        if(cartItem.qty < product.stock){
            cartItem.qty++
        } else {
            console.log('No more available stock')
        }
    } else {
        cart.push({name: product.name, price: product.price, qty: 1})
    }

    return cart;
}

let cart = []

const shirt = { name: 'vans', price: 350, stock: 3}
const pants = { name: 'jeans', price: 450, stock: 3}

cart = addProductToCart(shirt, cart)
cart = addProductToCart(shirt, cart)
cart = addProductToCart(shirt, cart)
cart = addProductToCart(shirt, cart)

cart = addProductToCart(pants, cart)

console.log(cart)