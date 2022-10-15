const express = require("express");
const productsRouter = express.Router();
const contenedor = require("../../desafio2")

const listaDeProductos = new contenedor("productos.txt")

productsRouter.get("/productos",async(req,res)=>{
    try {
        res.render("productos", {products : await listaDeProductos.getAll()})
    } catch(error) {
        res.status(500).send("hubo un error en el servidor")
    }
})

productsRouter.get("/productos/:id", async(req,res)=>{
    const {id} = req.params;
    const product = await listaDeProductos.getById(parseInt(id));
    if(product){
        res.json({
            message:"producto encontrado",
            product: product
        })
    }else{
        res.json({
            message:"producto no encontrado"
        })
    }
})


productsRouter.post("/productos",async(req,res)=>{
    const newProduct = req.body
    await listaDeProductos.save(newProduct);
    res.redirect("/")
})

productsRouter.put("/productos/:id", async(req,res)=>{
    const {id} = req.params;
    const newInfo = req.body;
    const productosActualizados = await listaDeProductos.updateById(parseInt(id),newInfo);
    res.json({
        message:`El producto con el id ${id} fue actualizado`,
        response: productosActualizados
    })
})

productsRouter.delete("/productos/:id",async(req,res)=>{
    const {id} = req.params
    const productosActualizados = await listaDeProductos.deleteById(parseInt(id))
    res.json({
        message: `El producto con el id ${id} fue eliminado`,
        response: productosActualizados
    })
})

productsRouter.get("/",(req,res)=>{
    res.render("home")
})

module.exports = productsRouter;