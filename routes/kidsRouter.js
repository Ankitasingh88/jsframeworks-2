import express from "express";
import { kids, kidsContent } from "../data/products.js";

const kidsRouter = express.Router();

kidsRouter.get("/", (req, res) => {
    res.render("pages/home", {
        products : kids,
        content : kidsContent,
        bodyClass : "kids"
    })
})

kidsRouter.get('/products/:name', (req, res) => {
    const productsName = req.params.name; //access route parameters
        let products;
     
        for (let i = 0; i < products.length; i++) {
            if (kids[i].name === productsName) {
                products = kids[i];
                break; 
            }
        }
 
    if (products) {
         res.render('pages/products.ejs', {products});
    } else {
         res.status(404).send('Products not found');
    }
});

export default kidsRouter;
