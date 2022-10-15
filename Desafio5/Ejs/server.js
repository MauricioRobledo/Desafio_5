const express = require("express");
const productRouter = require('./src/routes/products');
const app = express();
app.listen(8080,()=>console.log("server Running"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", productRouter)