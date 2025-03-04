import express from "express";
import { beauty, beautyContent } from "../data/products.js";

const beautyRouter = express.Router();

beautyRouter.get("/",(req,res) => {
    res.render("pages/home",{
       products : beauty,
       content : beautyContent,
       bodyClass : "beauty"
    })
})
 
beautyRouter.get('/products/:name', (req, res) => {
     const productsName = req.params.name; //access route parameters
         let products;
     
        for (let i = 0; i < products.length; i++) {
            if (beauty[i].name === productsName) {
                products = beauty[i];
                break; 
            }
        }
 
    if (products) {
         res.render('pages/products.ejs', {products});
    } else {
         res.status(404).send('Products not found');
    }
});

export default beautyRouter;