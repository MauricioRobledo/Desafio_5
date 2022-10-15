const express = require("express");
const handlebars = require("express-handlebars");
const productRouter = require('./src/routes/products');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(8080,()=>console.log("server is running at port 8080"));

app.engine("handlebars", handlebars.engine());

app.set("views", "./src/views");

app.set("view engine", "handlebars")



app.use("/", productRouter)