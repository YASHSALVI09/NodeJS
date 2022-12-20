//Get api for all the products
//Get api for products by Id
//get api for products by category
//post api
//put api by id

// /array of products
const express = require("express");
const Joi = require("joi");
const { join } = require("path");
const app = express();
app.use(express.json());

var products=[{
  id:1,
  name:"Thumsup",
  price:20,
  category:"Grocery"
  },
  {
  id:2,
  name:"fanta",
  price:25,
  category:"Grocery"},
  {
    id:3,
    name:"rice",
    price:30,
    category:"grains"}]

    app.get("/products", function (req, res) {
    res.send(products);
    });
    
    app.get("/products/:id", function (req, res) {
    var productId = req.params.id;
        //array.find
        //array.push
    var product = products.find((c) => c.id === parseInt(productId));
    if (!product) {
          res.status(404).send("Product not found");
        } else res.send(product);
      });

    app.get("/productcategory/:category", function (req, res) {
    var productcategory = req.params.category;
            //array.find
            //array.push
    var product = products.find((c) => c.category === productcategory);
    if (!product) {
        res.status(404).send("Product not found");
    } else res.send(product);
    });

    app.listen(3000);
    console.log("listening");
      
    // let a = 1;
    // let b = "1"
    // let a == b true
    // let a === b false

    // search Filter for homework