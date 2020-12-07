const express = require('express')
const app = express()
const port = 8080
var produit = require('./models');
var cors = require('cors')
var bodyParser = require('body-parser');
const { sequelize } = require('./models');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.post('/', async (req, res) => {
    try {
        if (req.body.produit && req.body.image && req.body.description.processeur && req.body.description.ram && req.body.description.fonction && req.body.description.stockage && req.body.prix) {
            console.log(req.body.produits);
            const insertion = await produit.produits.create({ "produit": req.body.produit, "image": req.body.image, "description": { "processeur": req.body.description.processeur, "ram": req.body.description.ram, "fonction": req.body.description.fonction, "stockage": req.body.description.stockage }, "prix": req.body.prix });
            res.status(200).json(insertion);
        } else {
            res.status(400).json({ error: "Missing parameter" });
        }

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

})

app.get('/', async (req, res) => {
    try {
        const product = await produit.produits.findAll();
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: "This product does not exist in the database" });
        }

    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message);
    }

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})