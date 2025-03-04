import express from "express";
import { men,menContent } from "../data/products.js";

const menRouter = express.Router();

menRouter.get("/",(req,res) => {
    res.render("pages/home",{
       products : men,
       content : menContent,
       bodyClass : "men"
    })
})
 
menRouter.get('/products/:name', (req, res) => {
    const productsName = req.params.name; //access route parameters
        let products;
     
        for (let i = 0; i < products.length; i++) {
            if (men[i].name === productsName) {
                products = men[i];
                break; 
            }
        }
 
    if (products) {
         res.render('pages/products.ejs', {products});
    } else {
         res.status(404).send('Products not found');
    }
});

export default menRouter;