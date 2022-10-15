const express = require("express");
const productRouter = require('./src/routes/products');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(8080,()=>console.log("server is running at port 8080"));


app.set("views", "./src/views");

app.set("view engine", "pug")



app.use("/", productRouter)