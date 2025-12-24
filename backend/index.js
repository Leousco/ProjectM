const express = require("express");
const app = express();

app.use(express.json());

let products = [];


app.get("/", (req, res) => {
    res.send("Hello From Backend");
})

// testing

app.post("/products", (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json({ message: "Product Added", product});
})

app.get("/products", (req, res) => {
    res.json(products);
})


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
