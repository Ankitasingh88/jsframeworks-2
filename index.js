import express from "express"
import womenRouter from "./routes/womenRouter.js";
import menRouter from "./routes/menRouter.js";
import kidsRouter from "./routes/kidsRouter.js";
import beautyRouter from "./routes/beautyRouter.js";
import {allProducts,homeContent} from './data/products.js';
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config();
const PORT = process.env.PORT;

const app = express ();
const __dirname = path.resolve();
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.get("/", (req, res) => {
    res.render("pages/home", {
        products : allProducts,
        content : homeContent,
        bodyClass : "home"
    })
});

app.get('/products/:name', (req, res) => {
    const productsName = req.params.name; //access route parameters
        let products;
    
    for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].name === productsName) {
            products = allProducts[i];
            break; 
        }
    }

    if (products) {
        res.render('pages/products.ejs', {products});
    } else {
        res.status(404).send('Products not found');
    }
});

app.use("/women", womenRouter);
app.use("/men", menRouter);
app.use("/kids", kidsRouter);
app.use("/beauty", beautyRouter);

app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`)
});