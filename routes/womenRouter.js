import express from "express";
import { women, womenContent } from "../data/products.js";

const womenRouter = express.Router();

womenRouter.get("/",(req,res) => {
   res.render("pages/home",{
      products : women,
      content : womenContent,
      bodyClass : "women"
   })
 })

womenRouter.get('/products/:name', (req, res) => {
    const productsName = req.params.name; //access route parameters
        let products;
    
        for (let i = 0; i < products.length; i++) {
            if (women[i].name === productsName) {
                products = women[i];
                break; 
            }
        }

    if (products) {
        res.render('pages/products.ejs', {products});
    } else {
        res.status(404).send('Products not found');
    }
});

export default womenRouter;
